
import Link from "next/link";

export default function Hero() {
 

  return (
    <section
                           id="home"
                           className="hero hero-style pos-rel bg_img"
                           data-background="/assets/img/bg/hero_bg.png"
                           style={{ backgroundImage: "url(/assets/img/bg/hero_bg.png)" }}
                       >
                           <div className="container">
                               <div className="row">
                                   <div className="col-lg-9 col-md-9">
                                       <div className="hero-content">
                                           <h2 className="title scale-animation wow">Empower your business with the Nxtgeni AI platform</h2>
                                           <p className="sub-title scale-animation wow">A platform where users can use AI agents and tools to automate work, make smarter decisions, and grow faster.</p>
                                           <div className="hero-btn scale-animation wow">
                                               <a className="thm-btn agency-btn" href="#about">
                                                   <span className="text">
                                                       Begin Today with us
                                                   </span>
                                                   <span className="arrow">
                                                       <span className="arrow-icon">
                                                           <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                               <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                                                               <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                                                               <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                                                               <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                                                               <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                                                               <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                                                               <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                                                           </svg>
                                                           <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                               <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                                                               <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                                                               <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                                                               <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                                                               <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                                                               <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                                                               <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                                                           </svg>
                                                       </span>
                                                   </span>
                                               </a>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-lg-3 col-md-3">
                                       <div className="hero-icon wow zoomIn" data-wow-delay="700ms" data-wow-duration="800ms">
                                           <img src="/assets/img/icon/animated-gif02.gif" alt="icon" />
                                       </div>
                                   </div>
                               </div>
                               <div className="row mt-55 hero-feature-row">
                                   <div className="col-lg-4 col-md-6 mt-30">
                                       <div className="xb-feature-item wow fadeInUp" data-wow-delay="700ms" data-wow-duration="600ms">
                                           <div className="xb-item--inner xb-border">
                                               <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon01.svg" alt="icon" /></span>
                                               <div className="xb-item--holder">
                                                   <h2 className="xb-item--title">Smarter insights</h2>
                                                   <p className="xb-item--content">Make faster, data-driven decisions powered by real-time AI analysis and prediction.</p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 mt-30">
                                       <div className="xb-feature-item wow fadeInUp" data-wow-delay="800ms" data-wow-duration="600ms">
                                           <div className="xb-item--inner xb-border">
                                               <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon02.svg" alt="icon" /></span>
                                               <div className="xb-item--holder">
                                                   <h2 className="xb-item--title">Integrated AI solutions</h2>
                                                   <p className="xb-item--content">No extra tools or plugins needed. Get built-in, scalable AI from day one.</p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6 mt-30">
                                       <div className="xb-feature-item wow fadeInUp" data-wow-delay="900ms" data-wow-duration="600ms">
                                           <div className="xb-item--inner xb-border">
                                               <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon03.svg" alt="icon" /></span>
                                               <div className="xb-item--holder">
                                                   <h2 className="xb-item--title">End-to-end automation</h2>
                                                   <p className="xb-item--content">Eliminate bottlenecks with intelligent workflows that never leave you guessing.</p>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </section>
   
  );
}
