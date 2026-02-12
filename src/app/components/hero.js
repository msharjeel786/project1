
import Link from "next/link";
import Arrow from '../../svg/arrow.svg'


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
