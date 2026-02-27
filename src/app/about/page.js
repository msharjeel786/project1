import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { DynamicScripts } from "../DynamicScripts";

export const metadata = {
  title: "About Us - Aivora",
  description: "Learn how Aivora helps businesses grow with smart, data-driven AI solutions.",
};

export default function AboutPage() {
  return (
    <>
      <DynamicScripts />
      <div className="xb-backtotop">
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
        </a>
      </div>
      <div className="body_wrap o-clip about-page inner-page">
        <Navbar />
        <div className="body-overlay"></div>
        <main>
          <section className="breadcrumb bg_img" data-background="/assets/img/bg/bootcamp-bg.png">
            <div className="container">
              <div className="breadcrumb__content">
                <ul className="breadcrumb__list clearfix list-unstyled">
                  <li className="breadcrumb-item"><a href="/">home</a></li>
                  <li className="breadcrumb-item">About Us</li>
                </ul>
                <h2 className="breadcrumb__title">About Us</h2>
              </div>
            </div>
          </section>

          <section className="about pos-rel pb-140">
            <div className="container">
              <div className="about-top-image ul_li_between align-items-start">
                <div className="img-hove-effect">
                  <div className="xb-img">
                    <a href="#!"><img src="/assets/img/about/img05.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img05.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img05.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img05.jpg" alt="image" /></a>
                  </div>
                </div>
                <div className="img-hove-effect">
                  <div className="xb-img">
                    <a href="#!"><img src="/assets/img/about/img06.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img06.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img06.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img06.jpg" alt="image" /></a>
                  </div>
                </div>
                <div className="xb-video">
                  <video loop muted playsInline autoPlay poster="/assets/img/about/video-img.png">
                    <source src="https://www.pexels.com/download/video/18069701/" />
                  </video>
                </div>
                <div className="img-hove-effect">
                  <div className="xb-img">
                    <a href="#!"><img src="/assets/img/about/img07.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img07.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img07.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img07.jpg" alt="image" /></a>
                  </div>
                </div>
                <div className="img-hove-effect">
                  <div className="xb-img">
                    <a href="#!"><img src="/assets/img/about/img08.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img08.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img08.jpg" alt="image" /></a>
                    <a href="#!"><img src="/assets/img/about/img08.jpg" alt="image" /></a>
                  </div>
                </div>
              </div>
              {/* <div className="sec-title sec-title-center about-sec-title about-sec-title-two mt-45">
                <span className="sub-title mb-10">Who We are?</span>
                <h2 className="title">
                  We helping<span><img src="/assets/img/icon/original-66948a0d81d.gif" alt="image" /></span> grow businesses and
                  <span><img src="/assets/img/icon/0deec720000b2066289b.gif" alt="image" /></span>scale with smart,
                  <span><img src="/assets/img/icon/b10c3e43e836d32554bf.gif" alt="image" /></span> data-driven AI agency
                </h2>
                <p className="content">We help grow and scale your business by delivering smart, data-driven AI solutions tailored to your needs. Our technology optimizes operations, enhances decision-making, and uncovers new opportunities for growth.</p>
              </div> */}
              {/* <div className="row mt-40">
                <div className="col-lg-4 col-md-6 mt-30">
                  <div className="xb-feature-item">
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
                  <div className="xb-feature-item">
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
                  <div className="xb-feature-item">
                    <div className="xb-item--inner xb-border">
                      <span className="xb-item--icon"><img src="/assets/img/icon/feature-icon03.svg" alt="icon" /></span>
                      <div className="xb-item--holder">
                        <h2 className="xb-item--title">End-to-end automation</h2>
                        <p className="xb-item--content">Eliminate bottlenecks with intelligent workflows that never leave you guessing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="about-bg">
              <img src="/assets/img/bg/about-bg02.png" alt="bg-image" />
            </div>
          </section>

          <section className="brand pb-150">
            <div className="container">
              <div className="sec-title sec-title-center brand-sec-title text-center mb-40">
                <p className="sub-title">
                  World's Best <span>120 Companies</span> Work With Us
                </p>
              </div>
            </div>
            <div className="brand-marquee ac-brand-marquee marquee-left">
              <div className="ac-brand-inner ul_li_between">
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo01.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo02.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo03.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo04.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo05.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo06.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo07.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo08.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo09.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo10.png" alt="logo" />
                </div>
                <div className="xb-brand-item">
                  <img src="/assets/img/brand/logo11.png" alt="logo" />
                </div>
              </div>
            </div>
          </section>

          <section className="feature-section bg_img parallaxie" data-background="/assets/img/bg/feature-bg.jpg">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="xb-feature-content">
                    <div className="sec-title sec-title-center fea-sec-title mb-35">
                      <span className="sub-title mb-20">Why We are Better?</span>
                      <h2 className="title title-line_height">Why our services are better than others?</h2>
                    </div>
                    <div className="row mt-none-30">
                      <div className="col-lg-6 col-md-6 mt-30">
                        <div className="xb-feature-item xb-feature-item2">
                          <div className="xb-item--inner xb-border">
                            <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon01.svg" alt="icon" /></span>
                            <h2 className="xb-item--title">Secure, ethical &amp; <br /> scalable AI</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mt-30">
                        <div className="xb-feature-item xb-feature-item2 xb-border">
                          <div className="xb-item--inner xb-border">
                            <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon04.svg" alt="icon" /></span>
                            <h2 className="xb-item--title">Expert team of AI <br /> specialists</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mt-30">
                        <div className="xb-feature-item xb-feature-item2">
                          <div className="xb-item--inner xb-border">
                            <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon02.svg" alt="icon" /></span>
                            <h2 className="xb-item--title">Custom-built <br /> solutions that fit you</h2>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mt-30">
                        <div className="xb-feature-item xb-feature-item2 xb-border">
                          <div className="xb-item--inner xb-border">
                            <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon06.svg" alt="icon" /></span>
                            <h2 className="xb-item--title">Client-centered, <br /> business-focused</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="team pt-140 pb-150 bg_img" data-background="/assets/img/bg/team-bg.png">
            <div className="container">
              <div className="sec-title sec-title-center text-center mb-45">
                <span className="sub-title mb-20">Our Specialists</span>
                <h2 className="title title-line_height">Dedicated professionals</h2>
              </div>
              <div className="row mt-none-55">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55">
                  <div className="xb-team-item xb-border">
                    <div className="xb-item--img">
                      <img src="/assets/img/team/Muhammad Asim Ishaque.jpg" style={{height:'100px', width: 'auto'}} alt="image" />
                    </div>
                    <div className="xb-item--holder ul_li_between">
                      <div className="xb-item--author">
                        <h2 className="xb-item--name">Ethan Reynolds</h2>
                        <span className="xb-item--desig">AI Engineer</span>
                      </div>
                      <span className="xb-item--social xb-border"><i className="fa-brands fa-linkedin-in"></i></span>
                    </div>
                    <div className="xb-bg"><img src="/assets/img/team/noice-bg.png" alt="image" /></div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55">
                  <div className="xb-team-item xb-border">
                    <div className="xb-item--img">
                      <img src="/assets/img/team/img02.jpg" alt="image" />
                    </div>
                    <div className="xb-item--holder ul_li_between">
                      <div className="xb-item--author">
                        <h2 className="xb-item--name">Priya Ramirez</h2>
                        <span className="xb-item--desig">Data Scientist</span>
                      </div>
                      <span className="xb-item--social xb-border"><i className="fa-brands fa-linkedin-in"></i></span>
                    </div>
                    <div className="xb-bg"><img src="/assets/img/team/noice-bg.png" alt="image" /></div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55">
                  <div className="xb-team-item xb-border">
                    <div className="xb-item--img">
                      <img src="/assets/img/team/img03.jpg" alt="image" />
                    </div>
                    <div className="xb-item--holder ul_li_between">
                      <div className="xb-item--author">
                        <h2 className="xb-item--name">Aiden Brooks</h2>
                        <span className="xb-item--desig">AI Researcher</span>
                      </div>
                      <span className="xb-item--social xb-border"><i className="fa-brands fa-linkedin-in"></i></span>
                    </div>
                    <div className="xb-bg"><img src="/assets/img/team/noice-bg.png" alt="image" /></div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55">
                  <div className="xb-team-item xb-border">
                    <div className="xb-item--img">
                      <img src="/assets/img/team/img04.jpg" alt="image" />
                    </div>
                    <div className="xb-item--holder ul_li_between">
                      <div className="xb-item--author">
                        <h2 className="xb-item--name">Grayson Cole</h2>
                        <span className="xb-item--desig">AI Solutions Architect</span>
                      </div>
                      <span className="xb-item--social xb-border"><i className="fa-brands fa-linkedin-in"></i></span>
                    </div>
                    <div className="xb-bg"><img src="/assets/img/team/noice-bg.png" alt="image" /></div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55">
                  <div className="xb-team-item xb-border">
                    <div className="xb-item--img">
                      <img src="/assets/img/team/img05.jpg" alt="image" />
                    </div>
                    <div className="xb-item--holder ul_li_between">
                      <div className="xb-item--author">
                        <h2 className="xb-item--name">Eliana Rose</h2>
                        <span className="xb-item--desig"> Intelligence Analyst</span>
                      </div>
                      <span className="xb-item--social xb-border"><i className="fa-brands fa-linkedin-in"></i></span>
                    </div>
                    <div className="xb-bg"><img src="/assets/img/team/noice-bg.png" alt="image" /></div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55">
                  <div className="xb-team-item xb-border">
                    <div className="xb-item--img">
                      <img src="/assets/img/team/img06.jpg" alt="image" />
                    </div>
                    <div className="xb-item--holder ul_li_between">
                      <div className="xb-item--author">
                        <h2 className="xb-item--name">Carter Vaughn</h2>
                        <span className="xb-item--desig">AI Project Manager</span>
                      </div>
                      <span className="xb-item--social xb-border"><i className="fa-brands fa-linkedin-in"></i></span>
                    </div>
                    <div className="xb-bg"><img src="/assets/img/team/noice-bg.png" alt="image" /></div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55">
                  <div className="xb-team-item xb-border">
                    <div className="xb-item--img">
                      <img src="/assets/img/team/img07.jpg" alt="image" />
                    </div>
                    <div className="xb-item--holder ul_li_between">
                      <div className="xb-item--author">
                        <h2 className="xb-item--name">Logan Pierce</h2>
                        <span className="xb-item--desig">AI Solutions Architect</span>
                      </div>
                      <span className="xb-item--social xb-border"><i className="fa-brands fa-linkedin-in"></i></span>
                    </div>
                    <div className="xb-bg"><img src="/assets/img/team/noice-bg.png" alt="image" /></div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55">
                  <div className="xb-team-item xb-border">
                    <div className="xb-item--img">
                      <img src="/assets/img/team/img08.jpg" alt="image" />
                    </div>
                    <div className="xb-item--holder ul_li_between">
                      <div className="xb-item--author">
                        <h2 className="xb-item--name">Emerson Tate</h2>
                        <span className="xb-item--desig">AI Product Manager</span>
                      </div>
                      <span className="xb-item--social xb-border"><i className="fa-brands fa-linkedin-in"></i></span>
                    </div>
                    <div className="xb-bg"><img src="/assets/img/team/noice-bg.png" alt="image" /></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="award pos-rel">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="sec-title mb-30">
                    <span className="sub-title mb-20">Our awards</span>
                    <h2 className="title title-line_height mb-5">We are prestigious award winner</h2>
                    <p className="content">We are a prestigious award-winning agency, recognized for our excellence and innovation in delivering cutting-edge AI solutions that help businesses achieve remarkable growth and success. Our commitment client satisfaction.</p>
                    <div className="team-btn mt-40">
                      <a className="thm-btn agency-btn" href="/contact">
                        <span className="text">Begin Today with us</span>
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
                <div className="col-lg-6">
                  <div className="integration-logo-wrap ul_li">
                    <div className="award-logo-inner marquee-first">
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img01.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img02.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img03.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img04.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img05.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img06.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img07.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img08.png" alt="award-logo" />
                      </div>
                    </div>
                    <div className="award-logo-inner marquee2">
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img01.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img02.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img07.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img08.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img03.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img04.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img05.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img06.png" alt="award-logo" />
                      </div>
                    </div>
                    <div className="award-logo-inner marquee-first">
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img01.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img03.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img02.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img04.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img06.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img05.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img08.png" alt="award-logo" />
                      </div>
                      <div className="integration-logo award-logo">
                        <img src="/assets/img/award/img07.png" alt="award-logo" />
                      </div>
                    </div>
                    <div className="xb-shape">
                      <div className="shape shape--1"></div>
                      <div className="shape shape--2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="award-gradiant"></span>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
