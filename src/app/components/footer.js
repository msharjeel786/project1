import Arrow from '../../svg/arrow.svg'
import TwitterLogo from '../../svg/twiter.svg'

export default function Footer() {
  return (
    <footer className="footer footer-style-one pt-145 bg_img" data-background="/assets/img/bg/footer-bg.png" >
        <div className="xb-footer-wrap">
            <div className="xb-footer-heading wow zoomIn" data-wow-delay="0ms" data-wow-duration="600ms">
                <h1 className="title">AXI</h1>
                
                <a className="mail" href="mailto:info@axisystems.com.pk"><img src="/assets/img/icon/email-icon.svg" alt="icon" />info@axisystems.com.pk</a>
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
            <div className="xb-footer-follow-wrap">
                <h3 className="xb-footer-follow-title">Follow us</h3>
                <p className="xb-footer-follow-sub">Follow us on Instagram, Facebook & more — stay connected.</p>
            </div>
            <div className="xb-social-media-wrap">
                <div className="xb-social-media-item ul_li_between">
                    <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <span className="xb-item--name">Instagram</span>
                    </div>
                    <span className="xb-item--arrow">
                        <Arrow width={28} height={28} />
                    </span>
                    <a className="xb-overlay" href="https://www.instagram.com/axisystemspk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"></a>
                </div>
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
                    <a className="xb-overlay" href="https://www.facebook.com/axisystemspk" target="_blank" rel="noopener noreferrer" aria-label="Facebook"></a>
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
                    <a className="xb-overlay" href="https://twitter.com/axisystemspk" target="_blank" rel="noopener noreferrer" aria-label="Twitter"></a>
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
                    <a className="xb-overlay" href="https://pk.linkedin.com/company/axi-technologiespak" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"></a>
                </div>
                <div className="xb-social-media-item ul_li_between">
                    <div className="xb-item--holder ul_li">
                        <div className="xb-item--icon">
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                        <span className="xb-item--name">YouTube</span>
                    </div>
                    <span className="xb-item--arrow">
                        <Arrow width={28} height={28} />
                    </span>
                    <a className="xb-overlay" href="https://www.youtube.com/@axisystemspk" target="_blank" rel="noopener noreferrer" aria-label="YouTube"></a>
                </div>
            </div>
            <div className="xb-footer-bottom">
                <div className="contact-item">
                    <img src="/assets/img/icon/location-icon.svg" alt="icon" />
                    <span className="contact-method" style={{ fontSize: '12px' }}>6th Floor, NTS Building, Plot # 96 Street 4, H-8/1, Islamabad, Pakistan</span>
                </div>
                <div className="contact-item copyright-item">
                    <p>Copyright © 2026 <a href="#home">AXI Systems </a>, All rights reserved.</p>
                </div>
                <div className="contact-item">
                    <a href="callto:+(1)12304528597"><img src="/assets/img/icon/call-icon.svg" alt="icon" /></a>
                    <a className="contact-method" href="callto:+(1)12304528597" style={{ fontSize: '12px' }}>+92-334-5558140</a>
                </div>
            </div>
        </div>
    </footer>
  );
}
