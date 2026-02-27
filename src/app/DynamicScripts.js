"use client";

import Script from 'next/script';
import { useEffect } from 'react';

export const DynamicScripts = () => {
  useEffect(() => {
    // Ensure this code runs only in the browser
    if (typeof window !== 'undefined' && window.WOW) {
      // Initialize WOW.js
      const wow = new window.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
      });
      wow.init();
    }
  }, []);

  return (
    <>
      {/* jQuery */}
      <Script 
        src="/assets/js/jquery-3.7.1.min.js" 
        strategy="beforeInteractive"
      />
      
      {/* Bootstrap Bundle */}
      <Script 
        src="/assets/js/bootstrap.bundle.min.js" 
        strategy="afterInteractive"
      />
      
      {/* WOW.js for animations */}
      <Script 
        src="/assets/js/wow.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Swiper for carousels */}
      <Script 
        src="/assets/js/swiper.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Odometer for number animations */}
      <Script 
        src="/assets/js/odometer.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Parallax effects */}
      <Script 
        src="/assets/js/parallaxie.js" 
        strategy="afterInteractive"
      />
      
      {/* Appear.js for scroll animations */}
      <Script 
        src="/assets/js/appear.js" 
        strategy="afterInteractive"
      />
      
      {/* Marquee effect */}
      <Script 
        src="/assets/js/jquery.marquee.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Isotope for filtering */}
      <Script 
        src="/assets/js/isotope.pkgd.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Images Loaded */}
      <Script 
        src="/assets/js/imagesloaded.pkgd.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Nice Select */}
      <Script 
        src="/assets/js/jquery.nice-select.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Magnific Popup */}
      <Script 
        src="/assets/js/jquery.magnific-popup.min.js" 
        strategy="afterInteractive"
      />
      
      {/* jQuery UI */}
      <Script 
        src="/assets/js/jquery-ui.css" 
        strategy="afterInteractive"
      />
      
      {/* Additional plugins */}
      <Script 
        src="/assets/js/plugin.js" 
        strategy="afterInteractive"
      />
      
      {/* Lenis for smooth scrolling */}
      <Script 
        src="/assets/js/lenis.js" 
        strategy="afterInteractive"
      />
      
      {/* Magic cursor */}
      <Script 
        src="/assets/js/magiccursor.js" 
        strategy="afterInteractive"
      />
      
      {/* Parallax scroll */}
      <Script 
        src="/assets/js/parallax-scroll.js" 
        strategy="afterInteractive"
      />
      
      {/* ScrollSpy */}
      <Script 
        src="/assets/js/scrollspy.js" 
        strategy="afterInteractive"
      />
      
      {/* SplitText */}
      <Script 
        src="/assets/js/SplitText.js" 
        strategy="afterInteractive"
      />
      
      {/* Easing */}
      <Script 
        src="/assets/js/easing.min.js" 
        strategy="afterInteractive"
      />
      
      {/* Image Reveal Hover */}
      <Script 
        src="/assets/js/imageRevealHover.js" 
        strategy="afterInteractive"
      />
      
      {/* Main JS (must be last) */}
      <Script 
        src="/assets/js/main.js" 
        strategy="afterInteractive"
      />
    </>
  );
};
