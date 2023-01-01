import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import visualImg01 from '../../assets/images/main_visual_01.jpg';
import { Textillate } from 'textillate-react';

gsap.registerPlugin(ScrollTrigger);

const MainSlideContents = () => {
  // refs
  const visualTextRef = useRef(null);
  const visualHeaderTextRef = useRef(null);
  const scrollDownRef = useRef(null);

  const visualTextAnimations = useCallback(() => {
    gsap.to(visualTextRef.current, {
      duration: 2,
      x: -30,
      opacity: 1,
      ease: 'power3.easeOut',
      stagger: {
        each: 0.1,
      },
    });
  });

  const visualHeaderTextAnimations = useCallback(() => {
    gsap.to(visualHeaderTextRef.current, {
      duration: 2,
      x: -30,
      opacity: 1,
      ease: 'power3.easeOut',
      stagger: {
        each: 0.1,
      },
    });
  });
  const scrollDownIntroAnimation = useCallback(() => {
    gsap.to(scrollDownRef.current, {
      duration: 2,
      y: -30,
      opacity: 1,
      ease: 'power3.easeOut',
    });
  });

  useEffect(() => {
    visualTextAnimations();
    visualHeaderTextAnimations();
    scrollDownIntroAnimation();
  }, []);
  // ;

  return (
    <MainContainer>
      <MainVisual>
        <div className='visual_slider'>
          <div className='visual_slider'>
            <div className='visual_text'>
              <h2 ref={visualHeaderTextRef}>
                <Textillate
                  option={{
                    in: { effect: 'fadeInRight', shuffle: false },
                  }}
                >
                  More Creative & More Experience
                </Textillate>
              </h2>
              <div className='visual_sub_text'>
                <p ref={visualTextRef}>
                  <Textillate
                    option={{
                      in: { effect: 'fadeInRight', shuffle: false },
                    }}
                  >
                    Digital Creative Agency.
                  </Textillate>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* scroll down */}
        <div ref={scrollDownRef} className='scroll_down'>
          <span>SCROLL DOWN</span>
        </div>
      </MainVisual>
    </MainContainer>
  );
};

export default MainSlideContents;

const MainVisual = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url(${visualImg01}) center center no-repeat;
  background-size: cover;

  .visual_slider {
    position: relative;
    width: 100%;
    height: 100%;
    .visual_text {
      color: #fff;
      font-size: 2rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      max-width: 1400px;
      h2 {
        position: relative;
        opacity: 0;
        left: 30px;
        color: #fff;
        font-size: 1.3rem;
        font-weight: 600;
      }
      .visual_sub_text {
        margin-top: 10px;
        font-size: 6rem;
        font-weight: 600;
        font-family: 'Poppins', 'Noto Sans KR', 'Malgun Gothic', '맑은 고딕',
          sans-serif;
      }
      .visual_sub_text p {
        position: relative;
        left: 30px;
        opacity: 0;
        font-weight: 600;
        font-size: 5rem;
        letter-spacing: -0.04em;
        color: #fff;
        line-height: 1.5;
      }
    }
  }
  // 스크롤 다운
  .scroll_down {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 20px;
    z-index: 10;
    opacity: 0;
    span {
      color: #fff;
      display: block;
      position: absolute;
      top: -27px;
      font-size: 0.9em;
      left: 50%;
      transform: translateX(-50%);
      width: 130px;
      text-align: center;
    }
  }
  .scroll_down::before,
  .scroll_down::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 50%;
    border: 1px solid #ff0000;
    height: 6px;
    width: 6px;
    transform: translate(-50%, -100%) rotate(45deg);
    border-top: transparent;
    border-left: transparent;
    animation: scroll-down 1.5s ease-in-out infinite;
  }
  .scroll_down::after {
    top: 25%;
    animation-delay: 0.4s;
  }
  @keyframes scroll-down {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: 90%;
    }
  }
`;

const MainContainer = styled.div`
  position: relative;
  margin: 0px;
  padding: 0px;
`;
