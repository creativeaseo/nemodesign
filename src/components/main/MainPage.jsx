import MainSlideContents from './MainSlideContents';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import Dots from './Dots';
import { scrollerFactory } from './scroll.util';
import MainWorkContents from './MainWorkContents';
import MainContactContents from './MainContactContents';

const MainPage = () => {
  const outerDivRef = useRef(null);
  const getPageHeight = () => window.innerHeight; // 화면 세로길이. 100vh와 같습니다.
  const [scrollIndex, setScrollIndex] = useState(1);
  const scroller = scrollerFactory.vertical(outerDivRef);

  const scrollTo = (index) => {
    scroller(getPageHeight() * index);
  };

  // const [testASS, setTestAss] = useState(false);

  useEffect(() => {
    // 전체 이동 버튼 state
    const wheelHandler = (e) => {
      e.preventDefault();
      //스크롤 행동 구현
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝 부분 위치
      const index = Math.floor(scrollTop / getPageHeight());

      // 스크롤 내릴 때
      if (deltaY > 0) {
        scrollTo(Math.min(2, index + 1));
        if (Math.floor(scrollTop === 0)) {
          setScrollIndex(2);
        }
        if (Math.floor(scrollTop === getPageHeight())) {
          setScrollIndex(3);
        }

        // if (Math.floor(scrollTop === getPageHeight() * 2)) {
        //   setScrollIndex(2);
        // }
      } else {
        scrollTo(Math.max(0, index - 1));
        // if (Math.floor(scrollTop <= getPageHeight())) {
        //   setScrollIndex(1);
        // }
        // if (
        //   Math.floor(scrollTop >= getPageHeight()) &&
        //   Math.floor(scrollTop < getPageHeight() * 2)
        // ) {
        //   setScrollIndex(2);
        // }
        if (Math.floor(scrollTop === getPageHeight())) {
          setScrollIndex(1);
        }

        if (Math.floor(scrollTop === getPageHeight() * 2)) {
          setScrollIndex(2);
        }
      }

      // if (deltaY > 0) {
      //   // 스크롤 내릴 때
      //   if (scrollTop >= 0 && scrollTop < pageHeight) {
      //     //현재 1페이지
      //     outerDivRef.current.scrollTo({
      //       top: pageHeight,
      //       left: 0,
      //       behavior: 'smooth',
      //     });
      //     setScrollIndex(2);
      //   } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
      //     //현재 2페이지
      //     outerDivRef.current.scrollTo({
      //       top: pageHeight * 2,
      //       left: 0,
      //       behavior: 'smooth',
      //     });
      //     setScrollIndex(3);
      //   } else {
      //     //현재 3페이지
      //     outerDivRef.current.scrollTo({
      //       top: pageHeight * 2,
      //       left: 0,
      //       behavior: 'smooth',
      //     });
      //     setScrollIndex(3);
      //   }
      // } else {
      //   if (scrollTop >= 0 && scrollTop < pageHeight) {
      //     //현재 1페이지
      //     outerDivRef.current.scrollTo({
      //       top: 0,
      //       left: 0,
      //       behavior: 'smooth',
      //     });
      //     setScrollIndex(1);
      //   } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
      //     //현재 2페이지
      //     outerDivRef.current.scrollTo({
      //       top: 0,
      //       left: 0,
      //       behavior: 'smooth',
      //     });
      //     setScrollIndex(1);
      //   } else {
      //     //현재 3페이지
      //     outerDivRef.current.scrollTo({
      //       top: pageHeight,
      //       left: 0,
      //       behavior: 'smooth',
      //     });
      //     setScrollIndex(2);
      //   }
      // }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  // const moveScrollDot = () => {
  //   const { scrollTop } = outerDivRef.current;
  //   if (scrollTop >= 0 && scrollTop < pageHeight) {
  //     //현재 1페이지
  //     console.log('현재 1페이지');
  //     outerDivRef.current.scrollTo({
  //       top: pageHeight,
  //       left: 0,
  //       behavior: 'smooth',
  //     });
  //     setScrollIndex(2);
  //   } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
  //     //현재 2페이지
  //     console.log('현재 2페이지');
  //     outerDivRef.current.scrollTo({
  //       top: pageHeight * 2,
  //       left: 0,
  //       behavior: 'smooth',
  //     });
  //     setScrollIndex(2);
  //   } else {
  //     //현재 3페이지
  //     console.log('현재 3페이지');
  //     outerDivRef.current.scrollTo({
  //       top: pageHeight * 2,
  //       left: 0,
  //       behavior: 'smooth',
  //     });
  //     setScrollIndex(3);
  //   }
  // };

  return (
    <MainSlideWrap ref={outerDivRef}>
      <Dots scrollIndex={scrollIndex} />
      <MainSlideContents scrollIndex={scrollIndex} />
      <MainWorkContents scrollIndex={scrollIndex} />
      <MainContactContents scrollIndex={scrollIndex} />
    </MainSlideWrap>
  );
};

export default MainPage;

const MainSlideWrap = styled.div`
  position: relative;
  height: 100vh;
  overflow-y: auto;
  .inner {
    height: 100vh;
    font-size: 100px;
  }
`;
