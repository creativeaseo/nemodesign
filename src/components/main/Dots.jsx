import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

// 전체 이동 원형 버튼 노출시
// const Dot = ({ num, scrollIndex, moveScrollDot }) => {
//   return (
//     <>
//       <DotStyle onClick={moveScrollDot}>
//         <div className={`${num === scrollIndex ? 'active' : ''}`}>
//           <span></span>
//         </div>
//       </DotStyle>
//     </>
//   );
// };

const Dots = ({ scrollIndex }) => {
  const scrollBarRevealRef = useRef(null);
  const scrollBarRef = useRef(null);
  const scrollChangeBar = () => {
    if (scrollIndex === 1) {
      scrollBarRef.current.style = 'height:40px';
    } else if (scrollIndex === 2) {
      scrollBarRef.current.style = 'height:80px';
    } else {
      scrollBarRef.current.style = 'height:120px';
    }
  };
  useEffect(() => {
    scrollChangeBar();
    gsap.to(scrollBarRevealRef.current, {
      duration: 2,
      x: -60,
      opacity: 1,
      ease: 'power3.easeOut',
    });
  }, [scrollChangeBar]);
  return (
    <>
      <ScrollDots ref={scrollBarRevealRef}>
        <span>0{scrollIndex}</span>
        <div>
          <span ref={scrollBarRef} className='scroll_bar'></span>
          {/* <Dot num={1} scrollIndex={scrollIndex} moveScrollDot={moveScrollDot} />
        <Dot num={2} scrollIndex={scrollIndex} />
        <Dot num={3} scrollIndex={scrollIndex} /> */}
        </div>
        <span>03</span>
      </ScrollDots>
    </>
  );
};

export default Dots;

const ScrollDots = styled.div`
  opacity: 0;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 6%;
  z-index: 100;
  justify-content: center;
  width: 20px;
  span {
    font-size: 15px;
    color: #fff;
    font-weight: 500;
  }
  span:nth-child(1) {
    display: block;
    margin-bottom: 15px;
  }
  span:nth-child(3) {
    display: block;
    margin-top: 15px;
    opacity: 0.8;
  }

  > div {
    position: relative;
    width: 1px;
    height: 120px;
    .scroll_bar {
      display: block;
      width: 1px;
      height: 40px;
      background: #fff;
      position: absolute;
      left: 7px;
      top: 0px;
      transition: height 0.5s;
    }
  }
  > div::before {
    position: absolute;
    left: 7px;
    top: 0px;
    content: '';
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.3;
  }
  /* > div {
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20px;
    height: 60px;
  } */
`;

// const DotStyle = styled.div`
//   span {
//     display: block;
//     width: 10px;
//     height: 10px;
//     border: 1px solid black;
//     border-radius: 999px;
//     transition-duration: 1000;
//     transition: 'background-color 0.5s';
//     cursor: pointer;
//   }
//   .active span {
//     background-color: #000;
//   }
// `;
