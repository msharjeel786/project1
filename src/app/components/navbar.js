import Link from "next/link";

export default function Navbar() {
  return (
         <header id="xb-header-area" className="header-area header-style--one header-transparent is-sticky">
                          <div className="xb-header stricky">
                              <div className="container mxw-1650">
                                  <div className="header__wrap ul_li_between">
                                      <div className="xb-header-logo">
                                          <a href="#home" className="logo1"><span className="logo-text">Nextgeni AI</span></a>
                                      </div>
                                      <div className="main-menu__wrap  navbar navbar-expand-lg p-0">
                                          <nav className="main-menu collapse navbar-collapse">
                                              <ul>
                                                  <li className="active"><a href="#home"><span>Home</span></a></li>
                                                  <li><a href="#about"><span>About</span></a></li>
                                                  <li><a href="#services"><span>Services</span></a></li>
                                                  <li><a href="#why"><span>Why Nextgeni</span></a></li>
                                                  <li><a href="#tools"><span>Tools &amp; Agents</span></a></li>
                                                  <li><a href="#pricing"><span>Pricing</span></a></li>
                                                  <li><a href="#contact"><span>Contact</span></a></li>
                                              </ul>
                                          </nav>
                                      </div>
                                      <div className="header-btn">
                                          <a className="thm-btn" href="#contact">join now</a>
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
                                                  <a href="#home" rel="home"><span className="logo-text">Nextgeni AI</span></a></div>
                                              <div className="xb-header-mobile-search xb-hide-xl">
                                                  <form role="search" action="#">
                                                      <input type="text" placeholder="Search..." name="s" className="search-field" />
                                                      <button className="search-submit" type="submit"><i className="far fa-search"></i></button>
                                                  </form>
                                              </div>
                                              <nav className="xb-header-nav">
                                                  <ul className="xb-menu-primary clearfix">
                                                      <li><a href="#home"><span>Home</span></a></li>
                                                      <li><a href="#about"><span>About</span></a></li>
                                                      <li><a href="#services"><span>Services</span></a></li>
                                                      <li><a href="#why"><span>Why Nxtgeni</span></a></li>
                                                      <li><a href="#tools"><span>Tools &amp; Agents</span></a></li>
                                                      <li><a href="#pricing"><span>Pricing</span></a></li>
                                                      <li><a href="#contact"><span>Contact</span></a></li>
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
