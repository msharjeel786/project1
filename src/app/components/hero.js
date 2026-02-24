"use client";

import { useState, useEffect, useRef } from "react";
import Arrow from '../../svg/arrow.svg'

const CAROUSEL_IMAGES = Array.from({ length: 17 }, (_, i) => `/carousel/${i + 1}.png`);
const IMAGE_DURATION_MS = 3500;
const FADE_DURATION_MS = 600;

export default function Hero() {
  const [phase, setPhase] = useState("video");
  const [imageIndex, setImageIndex] = useState(0);
  const [leaveIndex, setLeaveIndex] = useState(undefined);
  const [fadingOutImages, setFadingOutImages] = useState(false);
  const [fadeActive, setFadeActive] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const videoRef = useRef(null);

  const onVideoEnded = () => {
    setPhase("images");
    setImageIndex(0);
    setLeaveIndex(undefined);
    setPanelVisible(false);
  };

  useEffect(() => {
    if (phase !== "images") return;
    const t = setTimeout(() => {
      if (imageIndex < 16) {
        setImageIndex((i) => i + 1);
      } else {
        setFadingOutImages(true);
        setTimeout(() => {
          setPhase("video");
          setImageIndex(0);
          setLeaveIndex(undefined);
          setFadingOutImages(false);
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
          }
        }, FADE_DURATION_MS);
      }
    }, IMAGE_DURATION_MS);
    return () => clearTimeout(t);
  }, [phase, imageIndex]);

  useEffect(() => {
    if (phase !== "images") return;
    setLeaveIndex(imageIndex > 0 ? imageIndex - 1 : undefined);
    setFadeActive(false);
    const t = setTimeout(() => setLeaveIndex(undefined), FADE_DURATION_MS);
    return () => clearTimeout(t);
  }, [phase, imageIndex]);

  useEffect(() => {
    if (leaveIndex === undefined) {
      setFadeActive(false);
      return;
    }
    const raf = requestAnimationFrame(() => setFadeActive(true));
    return () => cancelAnimationFrame(raf);
  }, [leaveIndex]);

  useEffect(() => {
    if (phase === "images" && !fadingOutImages) {
      const raf = requestAnimationFrame(() => setPanelVisible(true));
      return () => cancelAnimationFrame(raf);
    }
    if (phase === "video") setPanelVisible(false);
  }, [phase, fadingOutImages]);

  const showImagesPanel = phase === "images" || fadingOutImages;
  const imagesPanelOpacity =
    phase === "images" && !fadingOutImages && panelVisible ? 1 : 0;

  const bgStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  };
  const fadeTransition = `opacity ${FADE_DURATION_MS / 1000}s ease`;

  return (
    <section
      id="home"
      className="hero hero-style pos-rel bg_img"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop={false}
        muted
        playsInline
        onEnded={onVideoEnded}
        style={{
          ...bgStyle,
          opacity: phase === "video" ? 1 : 0,
          pointerEvents: phase === "video" ? "auto" : "none",
          transition: fadeTransition,
        }}
      >
        <source src="/assets/img/bg/Futuristic_City_and_Business_District.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {showImagesPanel && (
        <div
          style={{
            ...bgStyle,
            opacity: imagesPanelOpacity,
            transition: fadeTransition,
            display: "flex",
            alignItems: "stretch",
            justifyContent: "stretch",
          }}
          aria-hidden="true"
        >
          {leaveIndex !== undefined && (
            <img
              key={`leave-${leaveIndex}`}
              src={CAROUSEL_IMAGES[leaveIndex]}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: fadeActive ? 0 : 1,
                transition: fadeTransition,
              }}
            />
          )}
          <img
            key={`current-${imageIndex}`}
            src={CAROUSEL_IMAGES[imageIndex]}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: leaveIndex !== undefined ? (fadeActive ? 1 : 0) : 1,
              transition: fadeTransition,
            }}
          />
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 0
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <div className="hero-content">
              <h2 className="title scale-animation wow">
                Empowering Pakistan's <span style={{ background: "linear-gradient(to right, #12ffac, #199bf1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Digital Future</span>
              </h2>
              <p className="sub-title scale-animation wow">Driving innovation through technology, governance, and human capital to build a secure and connected digital ecosystem.</p>
              <div className="hero-btn scale-animation wow">
                <a className="thm-btn agency-btn" href="#about">
                  <span className="text">
                    Explore more solutions
                  </span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <Arrow width={28} height={28} /> 
                      <Arrow width={28} height={28} />  
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3">
            <div className="hero-icon wow zoomIn" data-wow-delay="700ms" data-wow-duration="800ms">
              {/* <img src="/assets/img/icon/animated-gif02.gif" alt="icon" /> */}
            </div>
          </div>
        </div>
        <div className="row mt-55 hero-feature-row">
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item wow fadeInUp" data-wow-delay="700ms" data-wow-duration="600ms">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon01.svg" alt="icon" /></span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Digital Education</h2>
                  <p className="xb-item--content">Building digital literacy and skills for the workforce of tomorrow.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item wow fadeInUp" data-wow-delay="800ms" data-wow-duration="600ms">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon02.svg" alt="icon" /></span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">AI & Data Analytics</h2>
                  <p className="xb-item--content">Leveraging artificial intelligence to drive data-driven decisions and automation.

</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-30">
            <div className="xb-feature-item wow fadeInUp" data-wow-delay="900ms" data-wow-duration="600ms">
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon03.svg" alt="icon" /></span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Cybersecurity</h2>
                  <p className="xb-item--content">Protecting digital infrastructure with enterprise-grade security solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  );
}
