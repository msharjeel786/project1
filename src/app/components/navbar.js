"use client";

import { usePathname } from "next/navigation";
import Arrow from '../../svg/arrow.svg';
import XLogo from '../../svg/xLogo.svg';

export default function Navbar() {
  const pathname = usePathname();
  const path = pathname ?? "";

  const navLink = (href, label) => (
    <a href={href} className="xb-nav__link">{label}</a>
  );

  const servicesMegamenu = (
    <ul className="submenu">
      <li>
        <div className="mega_menu_wrapper">
          <div className="container-fluid p-0">
            <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
              <div className="row justify-content-lg-between">
                <div className="col-xl-9 col-lg-8">
                  <div className="mega_menu_box">
                    <div className="social_area">
                      <div className="row mt-none-30 align-items-center">
                        <div className="col-xl-4 mt-30">
                          <div className="social_inner ul_li">
                            <span>Follow Us:</span>
                            <ul className="social_icons_list unordered_list">
                              <li><a href="https://www.facebook.com/axisystemspk" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="https://pk.linkedin.com/company/axi-technologiespak" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                              <li><a href="https://twitter.com/axisystemspk" target="_blank" rel="noopener noreferrer"><XLogo width={19} height={19} /></a></li>
                              <li><a href="#!"><i className="fab fa-dribbble"></i></a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-8 mt-30">
                          <div className="service_link">
                            <div className="xb-item--inner">
                              <div className="xb-item--holder ul_li">
                                <span className="xb-item--icon"><img src="/assets/img/icon/m_05.svg" alt="icon" /></span>
                                <h3 className="xb-item--title"><a href="#contact">Need any custom AI services.</a></h3>
                              </div>
                              <p className="xb-item--text">Discover our core offerings.</p>
                            </div>
                            <a href="#contact" className="xb-item--btn"><Arrow width={31} height={31} /><Arrow width={31} height={31} /></a>
                            <a href="#contact" className="xb-overlay"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="megamenu_case">
                    <div className="xb-item--inner">
                      <div className="xb-item--img">
                        <img src="/assets/img/service/image copy 4.png" alt="General AI projects" />
                      </div>
                      <div className="xb-item--holder">
                        <h3 className="xb-item--title">General AI projects..</h3>
                        <p className="xb-item--text">We deliver AI solutions streamline operations, boost efficiency.</p>
                        <a className="thm-btn agency-btn megamenu-btn" href="#tools">
                          <span className="text">read more project</span>
                          <span className="arrow"><span className="arrow-icon"><Arrow width={25} height={25} /><Arrow width={25} height={25} /></span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );

  const blogHref = path === "/" || path === "" ? "#blogs" : "/events";

  return (
    <header id="xb-header-area" className="header-area header-style--one header-transparent is-sticky" data-pathname={path}>
      <div className="xb-header stricky">
        <div className="container mxw-1650">
          <div className="header__wrap ul_li_between">
            <div className="xb-header-logo">
              <a href="/" className="logo1">
                <img src="/assets/img/logo/AXISystemslogofotter.svg" alt="" style={{ width: '200px', height: 'auto' }} />
              </a>
            </div>
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">
              <nav className="main-menu collapse navbar-collapse">
                <ul className="xb-nav">
                  <li className="xb-nav__item">{navLink("/", "Home")}</li>
                  <li className="xb-nav__item">{navLink("/#about", "About Us")}</li>
                  <li className="menu-item-has-children megamenu">
                    <a href="/#tools" className="xb-nav__link"><span>Services</span></a>
                    {servicesMegamenu}
                  </li>
                  <li className="xb-nav__item">{navLink(blogHref, "Blog")}</li>
                  <li className="xb-nav__item">{navLink("/#contact", "Contact Us")}</li>
                </ul>
              </nav>
            </div>
            <div className="header-btn">
              <a className="thm-btn" href="/#contact">JOIN NOW</a>
            </div>
            <div className="header-bar-mobile side-menu d-lg-none">
              <a className="xb-nav-mobile" href="javascript:void(0);">
                <i className="far fa-bars"></i>
              </a>
            </div>
          </div>
          <div className="xb-header-wrap">
            <div className="xb-header-menu">
              <div className="xb-header-menu-scroll">
                <div className="xb-menu-close xb-hide-xl xb-close"></div>
                <div className="xb-logo-mobile xb-hide-xl">
                  <a href="/" rel="home">
                    <img src="/assets/img/logo/AXISystemslogofotter.svg" alt="AXI Systems" style={{ width: '180px', height: 'auto' }} />
                  </a>
                </div>
                <nav className="xb-header-nav">
                  <ul className="xb-nav xb-nav--mobile">
                    <li className="xb-nav__item">{navLink("/", "Home")}</li>
                    <li className="xb-nav__item">{navLink("#about", "About Us")}</li>
                    <li className="menu-item-has-children megamenu">
                      <a href="/#tools" className="xb-nav__link"><span>Services</span></a>
                      {servicesMegamenu}
                    </li>
                    <li className="xb-nav__item">{navLink(blogHref, "Blog")}</li>
                    <li className="xb-nav__item">{navLink("/#contact", "Contact Us")}</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="xb-header-menu-backdrop"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
