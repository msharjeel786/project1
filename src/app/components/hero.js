import Link from "next/link";
import Arrow from '../../svg/arrow.svg'


export default function Hero() {
 

  return (
    <section
      id="home"
      className="hero hero-style pos-rel bg_img"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}
      >
        <source src="/assets/img/bg/Futuristic_City_and_Business_District.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
                <a className="thm-btn agency-btn" href="#services">
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
