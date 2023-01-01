import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCallback, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// 포트폴리오 sample
const sampleWorkData = [
  {
    id: '01',
    name: 'EX HealthCare',
    subName: '이엑스 헬스케어',
    type: '반응형 웹사이트',
    currenturl: 'http://exhealthcare.com/',
    img: '../images/work/new_img01.jpg',
  },
  {
    id: '02',
    name: 'SATURN BATH',
    subName: '새턴바스',
    type: '반응형 웹사이트',
    currenturl: 'https://www.saturn.co.kr/',
    img: '../images/work/new_img08.jpg',
  },
  {
    id: '03',
    name: 'Pluglink',
    subName: '플러그링크',
    type: '반응형 웹사이트',
    currenturl: 'https://www.pluglink.kr/',
    img: '../images/work/new_img02.jpg',
  },

  {
    id: '04',
    name: 'In The Forest',
    subName: '인터포레스트',
    type: '반응형 웹사이트',
    currenturl: 'https://itforest.net/',
    img: '../images/work/new_img03.jpg',
  },

  {
    id: '05',
    name: 'HENZY',
    subName: '헨지디자인',
    type: '반응형 웹사이트',
    currenturl: 'http://www.henzy.kr/',
    img: '../images/work/new_img11.jpg',
  },
  {
    id: '06',
    name: 'CULLAD',
    subName: '컬래드',
    type: '자사몰 사이트',
    currenturl: 'https://cullad.com/',
    img: '../images/work/new_img04.jpg',
  },
  {
    id: '07',
    name: 'KO JUNG A CLINIC',
    subName: '고정아 클리닉',
    type: '반응형 웹사이트',
    currenturl: 'http://kjaclinic.com/',
    img: '../images/work/new_img05.jpg',
  },

  {
    id: '08',
    name: 'FENDA',
    subName: '펜다',
    type: '반응형 웹사이트',
    currenturl: 'https://www.fenda.co.kr/',
    img: '../images/work/new_img10.jpg',
  },
  {
    id: '09',
    name: 'Uahn Anti-aging Clinic',
    subName: '유안비만항노화센터',
    type: '반응형 웹사이트',
    currenturl: 'http://www.uahn.co.kr/',
    img: '../images/work/new_img09.jpg',
  },
  {
    id: '10',
    name: 'YAKSON',
    subName: '약손명가',
    type: '반응형 웹사이트',
    currenturl: 'https://yaksonhouse.com/',
    img: '../images/work/new_img12.jpg',
  },
];

// Animation
const MainWorkContents = ({ scrollIndex }) => {
  // Refs
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);
  const mainWorkSlideRef = useRef(null);

  useEffect(() => {
    if (scrollIndex === 2) {
      gsap.fromTo(
        mainWorkSlideRef.current,
        {
          opacity: 0,
          x: -80,
        },
        {
          duration: 1.5,
          opacity: 1,
          x: 0,
          delay: 0.6,
          ease: 'power3.easeOut',
        }
      );
    } else {
      gsap.fromTo(
        mainWorkSlideRef.current,
        {
          opacity: 0,
          x: 0,
        },
        {
          duration: 0,
          opacity: 0,
          x: 0,
          delay: 0,
          ease: 'power3.easeOut',
        }
      );
    }
  }, [scrollIndex]);

  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 3000,
    // cssEase: 'liner',
  };

  return (
    <MainWorkwrap>
      <div ref={mainWorkSlideRef} className='swiper_slide_container'>
        <div>
          <button className='all_work_link'>MORE WORK</button>
          <Slider {...settings}>
            {sampleWorkData.map((item) => (
              <div className='swiper_item' key={item.id}>
                <p className='img'>
                  <img src={item.img} alt='' />
                </p>
                <div className='work_project_text'>
                  <div className='work_logo'>
                    <p>{item.name}</p>
                  </div>
                  <p className='work_project_title'>
                    <span>{item.subName}</span>
                    <span>{item.type}</span>
                    <a
                      href={item.currenturl}
                      target='_blank'
                      rel='noopener noreferrer nofollow'
                    >
                      사이트 바로가기
                    </a>
                  </p>
                </div>
                <div className='work_current_num'>
                  <span className='current_num'>{item.id}</span>/
                  <span className='all_num'>{sampleWorkData.length}</span>
                </div>
                ;
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </MainWorkwrap>
  );
};

export default MainWorkContents;

const MainWorkwrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  /* background: #121212; */
  background: #000;

  background-size: cover;
  ::after {
    content: '';
    height: 100%;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    position: absolute;
    width: 25%;
    left: 50%;
    opacity: 0.1;
    background-color: #c0263b;
  }
  ::before {
    content: '';
    height: 100%;
    border-left: 1px solid #fff;
    background: #1f1f1f;
    position: absolute;
    width: 25%;
    left: 25%;
    opacity: 0.1;
    /* background-color: #fff; */
  }
  .work_current_num {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translateY(-50%);
    margin-left: -670px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    width: 45px;

    span {
      color: #fff;
      display: block;
      font-weight: 600;
    }
    span.current_num {
      font-size: 1.3rem;
      margin-bottom: 9px;
    }
    span.all_num {
      font-size: 1.1rem;
      margin-top: 9px;
      opacity: 0.5;
    }
  }

  .swiper_slide_container {
    position: relative;
    width: 100vw;
    max-width: 770px;
    height: auto;
    max-height: 650px;
    z-index: 100;
    .all_work_link {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      margin-left: -75px;
      width: 150px;
      height: 150px;
      background: #151515;
      bottom: -60px;
      z-index: 1000;
      color: #fff;
      font-weight: 600;
      font-size: 0.8rem;
      border: 0px;
      animation: shadow-pulse 1.5s infinite;
    }
    .slick-slider {
      position: relative;
      z-index: 100;
      .slick-list {
        overflow: visible;
      }
      .slick-active {
        z-index: 100;
      }
      .swiper_item {
        position: relative;
        .work_project_text {
          position: absolute;
          right: -170px;
          top: 50%;
          transform: translateY(-50%);
          .work_logo {
            color: #fff;
            font-size: 4rem;
            letter-spacing: -1px;
            font-weight: 600;
            text-shadow: 2px 2px 15px #000;
          }
          .work_project_title {
            position: relative;
            left: 0px;
            color: #fff;
            font-size: 0.9rem;
            margin-top: 5px;
            opacity: 0.8;
            text-align: right;
            span {
              margin-bottom: 5px;
              font-weight: 300;
            }
            span:nth-child(2) {
              position: relative;
              margin-bottom: 0px;
              margin-left: 12px;
              padding-left: 10px;
            }
            span:nth-child(2):before {
              position: absolute;
              left: 0px;
              top: 50%;
              content: '';
              height: 50%;
              width: 1px;
              transform: translateY(-50%);
              background: #fff;
            }
            a {
              display: block;
              width: 100%;
              font-size: 0.9rem;
              text-align: right;
              color: #fff;
              margin-top: 10px;
            }
          }
        }

        img {
          width: 100%;
        }
      }
      .slick-prev {
        top: auto;
        left: auto;
        right: -44px;
        bottom: 64px;
        width: 15px;
        height: 15px;
        background: url('./images/icon/prev_arrow.png') center center no-repeat;
        background-size: 100% auto;
        transform: rotate(0deg);
        opacity: 0.8;
        z-index: 100;
      }
      .slick-prev:before {
        font-size: 0px;
        content: '';
      }

      .slick-next {
        right: -15px;
        top: auto;
        bottom: 24px;
        margin-right: -30px;
        width: 15px;
        height: 15px;
        background: url('./images/icon/next_arrow.png') center center no-repeat;
        transform: rotate(0deg);
        background-size: 100% auto;
        opacity: 0.8;
      }
      .slick-next:before {
        font-size: 0px;
        content: '';
      }
      .slick-dots {
        position: absolute;
        display: block;
        width: auto;
        left: -50%;
        top: 50%;
        height: fit-content;
        bottom: 0px;
        transform: translateY(-50%);
      }
      .slick-dots li {
        position: relative;
        display: block;
        width: 20px;
        height: 7px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        margin-bottom: 30px;
        transition: all 0.2s;
      }
      .slick-dots li:last-child {
        margin-bottom: 0px;
      }
      .slick-dots li.slick-active {
        width: 30px;
      }
      .slick-dots li button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 100%;
        height: 1px;
        padding: 0px;
        cursor: pointer;
        background: #fff;
      }
      .slick-dots li.slick-active button {
        background: #c0263b;
      }
      .slick-dots li button:before {
        font-family: 'slick';
        font-size: 6px;
        line-height: 7px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 7px;
        content: '';
        text-align: center;
        opacity: 1;
        color: black;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    }
    /* .swiper {
      .swiper-wrapper {
      }
      .swiper-button-next,
      .swiper-button-prev {
        top: 50%;
      }
      .swiper-button-next {
        right: 0px;
      }
      .img img {
        width: 100%;
        height: 100%;
        max-height: auto;
      }
    } */
    @keyframes shadow-pulse {
      0% {
        box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.2);
        transform: scale(1);
      }
      /* 70% {
        box-shadow: 0 0 0 25px rgba(255, 255, 255, 0.1);
        transform: scale(1);
      } */
      100% {
        box-shadow: 0 0 0 35px rgba(255, 255, 255, 0);
        transform: scale(1);
      }
    }
  }
`;
