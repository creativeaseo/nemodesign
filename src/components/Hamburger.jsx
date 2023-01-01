import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap/dist/gsap';

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from './Animations';

import dallas from '../assets/images/dallas.webp';
import austin from '../assets/images/austin.webp';
import newyork from '../assets/images/newyork.webp';
import sanfrancisco from '../assets/images/sanfrancisco.webp';
import beijing from '../assets/images/beijing.webp';

const cities = [
  { name: 'Dallas', image: dallas },
  { name: 'Austin', image: austin },
  { name: 'New York', image: newyork },
  { name: 'San Francisco', image: sanfrancisco },
  { name: 'Beijing', image: beijing },
];

const Hamburger = ({ state, closeMenu }) => {
  // Vars for our animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      // close our menu
      staggerRevealClose(revealMenu, revealMenuBackground);

      gsap.to(menu, {
        duration: 1,
        css: { display: 'none' },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open our menu
      gsap.to(menu, {
        duration: 0,
        css: { display: 'block' },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <>
      <div ref={(e) => (menu = e)} className='hamburger-menu'>
        <div
          ref={(e) => (revealMenuBackground = e)}
          className='menu-secondary-background-color'
        ></div>
        <div ref={(e) => (revealMenu = e)} className='menu-layer'>
          <div
            ref={(e) => (cityBackground = e)}
            className='menu-city-background'
          ></div>
          <div className='container'>
            <div className='wrapper'>
              <div className='menu-links'>
                <nav>
                  <ul>
                    <li>
                      <Link
                        ref={(e) => (line1 = e)}
                        to='about'
                        onClick={closeMenu}
                        // onMouseEnter={(e) => handleHover(e)}
                        // onMouseOut={(e) => handleHoverExit(e)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        ref={(e) => (line2 = e)}
                        to='work'
                        onClick={closeMenu}
                        // onMouseEnter={(e) => handleHover(e)}
                        // onMouseOut={(e) => handleHoverExit(e)}
                      >
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        ref={(e) => (line3 = e)}
                        to='contact'
                        onClick={closeMenu}
                        // onMouseEnter={(e) => handleHover(e)}
                        // onMouseOut={(e) => handleHoverExit(e)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div ref={(e) => (info = e)} className='info'>
                  <h3>Our Promise</h3>
                  <p>
                    The HAMBRG, is a creative, engineer driven, global agency
                    working on advancing the software, advertising and design
                    communities to new heights.
                  </p>
                </div>
                {/* <div className='locations'>
                  Locations:
                  {cities.map((el) => (
                    <span
                      key={el.name}
                      onMouseEnter={() => handleCity(el.image, cityBackground)}
                      onMouseOut={() => handleCityReturn(cityBackground)}
                    >
                      {el.name}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
