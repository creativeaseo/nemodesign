import styled from 'styled-components';
import gsap from 'gsap';
import { useCallback, useEffect, useRef } from 'react';

const Footer = () => {
  // refs
  const footerCopyRef = useRef(null);
  const footerBrochureRef = useRef(null);

  const footerCopyIntroAnimation = useCallback(() => {
    gsap.to(footerCopyRef.current, {
      duration: 2,
      opacity: 1,
      x: 30,
      ease: 'power3.easeOut',
    });
  });

  const footerCopyBrochureAnimation = useCallback(() => {
    gsap.to(footerBrochureRef.current, {
      duration: 2,
      opacity: 1,
      x: -30,
      ease: 'power3.easeOut',
    });
  });

  useEffect(() => {
    footerCopyIntroAnimation();
    footerCopyBrochureAnimation();
  }, []);

  return (
    <FooterWrap>
      <div ref={footerCopyRef} className='footer_copy'>
        ⓒ <span>NEMODESIGN</span>.ALL RIGHTS RESERVED.
      </div>
      <div ref={footerBrochureRef} className='footer_pdf_down'>
        <button>
          <span>COMPANY</span> BROCHURE
        </button>
      </div>
    </FooterWrap>
  );
};

export default Footer;

const FooterWrap = styled.div`
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1600px;
  .footer_copy {
    position: relative;
    top: -20px;
    opacity: 0;
    font-size: 1.2em;
    font-weight: 300;
    span {
      font-weight: 600;
    }
  }
  .footer_pdf_down {
    opacity: 0;
    position: relative;
    top: -20px;
    left: 30px;
    font-size: 1.2em;
    button {
      display: block;
      background-color: transparent;
      border: 0px;
      color: #fff;
      font-weight: 300;
      padding-right: 24px;
      background: url('/images/icon_download.png') right center no-repeat;
      background-size: 12% auto;
      span {
        font-weight: 600;
        width: 100%;
      }
    }
  }
`;
