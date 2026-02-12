import Arrow from '../../svg/arrow.svg'
import TwitterLogo from '../../svg/twiter.svg'

export default function Footer() {
  return (
    <footer className="footer footer-style-one pt-145 bg_img" data-background="/assets/img/bg/footer-bg.png" >
        <div className="xb-footer-wrap">
            <div className="xb-footer-heading wow zoomIn" data-wow-delay="0ms" data-wow-duration="600ms">
                <h1 className="title">Nextgeni</h1>
                <a className="mail" href="mailto:nextgeni@domain.com"><img src="/assets/img/icon/email-icon.svg" alt="icon" />nextgeni@domain.com</a>
            </div>
            <div className="xb-footer-nav">
                <div className="xb-footer-nav-item">
                    <span className="sub-title">What we do?</span>
                    <h2 className="title"><a href="#services">Services</a></h2>
                </div>
                <div className="xb-footer-nav-item">
                    <span className="sub-title">Who we are?</span>
                    <h2 className="title"><a href="#about">About us</a></h2>
                </div>
                <div className="xb-footer-nav-item">
                    <span className="sub-title">How we deliver</span>
                    <h2 className="title"><a href="#contact">Contact us</a></h2>
                </div>
                <div className="xb-footer-nav-item">
                    <span className="sub-title">What we're good at?</span>
                    <h2 className="title"><a href="#tools">Our project</a></h2>
                </div>
                <div className="xb-footer-nav-item">
                    <span className="sub-title">News?</span>
                    <h2 className="title"><a href="#testimonials">News</a></h2>
                </div>
            </div>
            <div className="xb-social-media-wrap">
                <div className="xb-social-media-item ul_li_between">
                    <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <span className="xb-item--name">Facebook</span>
                    </div>
                    <span className="xb-item--arrow">
                    <Arrow width={28} height={28} /> 
                    </span>
                    <a className="xb-overlay" href="#!"></a>
                </div>
                <div className="xb-social-media-item ul_li_between">
                    <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                           <TwitterLogo width={19} height={19} />
                        </div>
                        <span className="xb-item--name">Twitter</span>
                    </div>
                    <span className="xb-item--arrow">
                                           <Arrow width={28} height={28} /> 

                    </span>
                    <a className="xb-overlay" href="#!"></a>
                </div>
                <div className="xb-social-media-item ul_li_between">
                    <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                        <span className="xb-item--name">LinkedIn</span>
                    </div>
                    <span className="xb-item--arrow">
                                           <Arrow width={28} height={28} /> 

                    </span>
                    <a className="xb-overlay" href="#!"></a>
                </div>
                <div className="xb-social-media-item ul_li_between">
                    <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                            <i className="fa-brands fa-square-youtube"></i>
                        </div>
                        <span className="xb-item--name">youtube</span>
                    </div>
                    <span className="xb-item--arrow">
                                                                 <Arrow width={28} height={28} /> 

                    </span>
                    <a className="xb-overlay" href="#!"></a>
                </div>
            </div>
            <div className="xb-footer-bottom">
                <div className="contact-item">
                    <img src="/assets/img/icon/location-icon.svg" alt="icon" />
                    <span className="contact-method">4517 Washington, USA</span>
                </div>
                <div className="contact-item copyright-item">
                    <p>Copyright © 2025 <a href="#home">Nextgeni</a>, All rights reserved.</p>
                </div>
                <div className="contact-item">
                    <a href="callto:+(1)12304528597"><img src="/assets/img/icon/call-icon.svg" alt="icon" /></a>
                    <a className="contact-method" href="callto:+(1)12304528597">+(1)1230 452 8597</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
