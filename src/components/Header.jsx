import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import { gsap } from 'gsap/dist/gsap';

const Header = () => {
  // Refs
  const headerRef = useRef(null);

  //State for menu button
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });

  const closeMenu = () => {
    setState({
      clicked: false,
      menuName: 'Menu',
    });
  };

  //State effect disabled button
  const [disabled, setDisabled] = useState(false);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
    }
  };

  //Determine if our menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const headerAnimations = useCallback(() => {
    gsap.to(headerRef.current, {
      duration: 2,
      y: 60,
      opacity: 1,
      ease: 'power3.easeOut',
      stagger: {
        each: 0.1,
      },
    });
  });

  useEffect(() => {
    headerAnimations();
  }, []);

  return (
    <>
      <AllHeaderNav>
        <header>
          <div className='container'>
            <div className='wrapper'>
              <div ref={headerRef} className='inner-header'>
                <div className='logo'>
                  <Link to='/' onClick={closeMenu}>
                    NEMODESIGN
                  </Link>
                </div>
                <div className='menu'>
                  <button
                    disabled={disabled}
                    onClick={handleMenu}
                    className={`fancy-burger ${
                      state.clicked ? 'show-nav' : 'hide-nav'
                    }`}
                  >
                    <span className='burger-bar'></span>
                    {/* <span className='rectangle rectangle--top rectangle--small'></span>
                    <span className='rectangle rectangle--middle rectangle--small'></span>
                    <span className='rectangle rectangle--bottom rectangle--small'></span> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Hamburger state={state} closeMenu={closeMenu} />
        </header>
      </AllHeaderNav>
    </>
  );
};

export default Header;

const AllHeaderNav = styled.div`
  header {
    opacity: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: -30px;
    z-index: 9999999;
  }
  .container {
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;
    .wrapper {
      .home {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        p {
          font-size: 0.75rem;
          letter-spacing: 0.3rem;
          text-transform: uppercase;
          font-weight: 500;
        }
        h5 {
          margin-top: 260px;
          font-size: 1.8rem;
          font-weight: 600;
          padding-right: 360px;
          text-align: left;
        }
      }
    }
  }
  // header
  header {
    height: 100px;
    .inner-header {
      opacity: 0;
      position: relative;
      top: 0px;
      z-index: 10;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .logo a {
        font-weight: 700;
        text-decoration: none;
        color: #fff;
        font-size: 1.4rem;
      }
      .menu {
        // 햄버거 메뉴 스타일
        .fancy-burger {
          position: relative;
          width: 100%;
          height: 50px;
          border: 0px;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          .burger-bar,
          .burger-bar::before,
          .burger-bar::after {
            display: block;
            width: 40px;
            height: 3px;
            position: relative;
            border-radius: 3px;
            background: #fff;
            transition: all 0.2s ease-in-out;
          }
          .burger-bar::before,
          .burger-bar::after {
            content: '';
            position: absolute;
          }
          .burger-bar::before {
            transform: translateY(-12px);
          }
          .burger-bar::after {
            transform: translateY(12px);
          }
        }
        .show-nav .burger-bar {
          background: transparent;
        }
        .show-nav .burger-bar::before {
          transform: rotate(45deg);
        }
        .show-nav .burger-bar::after {
          transform: rotate(-45deg);
        }
      }
    }
  }

  // hamburger menu or navigation whatever
  .hamburger-menu {
    display: none;
    z-index: 9;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100vh;
    width: 100vw;
    .menu-secondary-background-color {
      background-color: #191919;
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: -1;
    }
    .menu-layer {
      position: relative;
      background-color: #e6182d;
      height: 100%;
      overflow: hidden;
      .menu-city-background {
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        animation-name: backgroundEffect;
        animation-duration: 30s;
        animation-iteration-count: infinite;
      }
      .wrapper {
        position: relative;
        .menu-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          top: 200px;
          max-width: 1100px;
          margin: 0 auto;
          nav {
            display: block;
            ul {
              padding: 0;
              margin: 0;
              li {
                display: flex;
                align-items: center;
                list-style: none;
                font-size: 6rem;
                font-weight: 700;
                cursor: pointer;
                height: 175px;
                overflow: hidden;
                position: relative;
                width: 700px;
                a {
                  position: absolute;
                  color: #fff;
                  text-decoration: none;
                  &:hover {
                    color: $black;
                  }
                }
              }
            }
          }
          .info {
            color: #fff;
            width: 300px;
            h3 {
              font-size: 1.2rem;
              margin: 8px auto;
            }
            p {
              margin: 0 auto;
              font-size: 0.8rem;
            }
          }
        }
        .locations {
          position: absolute;
          bottom: -80px;
          color: #fff;
          margin-top: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          width: 100%;
          span {
            font-weight: 400;
            &:first-child {
              margin-left: 64px;
            }
            cursor: pointer;
            margin: 0 32px;
            transition: 0.3s ease-in-out;
            &:hover {
              background: $black;
              padding: 8px 24px;
              border-radius: 4px;
            }
          }
        }
      }
    }
  }

  @keyframes backgroundEffect {
    0% {
      background-position: 0% 0%;
    }
    25% {
      background-position: 40% 10%;
    }
    50% {
      background-position: 0 10%;
    }
    75% {
      background-position: 10% 40%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;
