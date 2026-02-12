import Link from "next/link";
import Arrow from '../../svg/arrow.svg'
import XLogo from '../../svg/xLogo.svg'


export default function Navbar() {
  return (
    
       <header id="xb-header-area" className="header-area header-style--one header-transparent is-sticky"> 
        <div className="xb-header stricky">
            <div className="container mxw-1650">
                <div className="header__wrap ul_li_between">
                    <div className="xb-header-logo">
                        <a href="/" className="logo1"><img src="/assets/img/logo/logo.svg" alt="" /></a>
                    </div>
                    <div className="main-menu__wrap  navbar navbar-expand-lg p-0">
                        <nav className="main-menu collapse navbar-collapse">
                            <ul>
                                <li className="menu-item-has-children active">
                                    <a href="/"><span>Home</span></a>
                                    <ul className="submenu">
                                        <li className="active"><a href="/"><span>Ai Agency</span></a></li>
                                        <li><a href="/ai-marketing"><span>Ai Marketing</span></a></li>
                                        <li><a href="/ai-chatbot"><span>Ai Chatbot</span></a></li>
                                    </ul>
                                </li>
                                <li className=""><a href="/about"><span>About Us</span></a></li>
                                <li className="menu-item-has-children megamenu">
                                    <a href="#!"><span>Pages</span></a>
                                    <ul className="submenu">
                                        <li>
                                            <div className="mega_menu_wrapper">
                                                <div className="container-fluid p-0">
                                                    <div className="mega_menu_wrapper_inner">
                                                        <div className="row mt-none-30">
                                                            <div className="col-xl-8 col-lg-12 mt-30">
                                                                <div className="megamenu_pages_wrapper">
                                                                    <div className="row g-10">
                                                                        <div className="col-xl-4 col-lg-4">
                                                                            <a className="iconbox_block_2" href="/service">
                                                                                <span className="icon_title_wrap">
                                                                                    <small className="iconbox_icon">
                                                                                        <img src="/assets/img/icon/m_01.svg" alt="" />
                                                                                    </small>
                                                                                    <small className="iconbox_title">Services</small>
                                                                                </span>
                                                                                <span className="description mb-0">Happy to help you!</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-xl-4 col-lg-4">
                                                                            <a className="iconbox_block_2" href="/service-details">
                                                                                <span className="icon_title_wrap">
                                                                                    <small className="iconbox_icon">
                                                                                        <img src="/assets/img/icon/m_01.svg" alt="" />
                                                                                    </small>
                                                                                    <small className="iconbox_title">Service details</small>
                                                                                </span>
                                                                                <span className="description mb-0">Happy to help you!</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-xl-4 col-lg-4">
                                                                            <a className="iconbox_block_2" href="/career">
                                                                                <span className="icon_title_wrap">
                                                                                    <span className="iconbox_icon">
                                                                                        <img src="/assets/img/icon/m_03.svg" alt="" />
                                                                                    </span>
                                                                                    <small className="iconbox_title">Career</small>
                                                                                    <span className="badge">We’re Hiring</span>
                                                                                </span>
                                                                                <span className="description mb-0">Open jobs to join our team.</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-xl-4 col-lg-4">
                                                                            <a className="iconbox_block_2" href="/career-details">
                                                                                <span className="icon_title_wrap">
                                                                                    <span className="iconbox_icon">
                                                                                        <img src="/assets/img/icon/m_02.svg" alt="" />
                                                                                    </span>
                                                                                    <small className="iconbox_title">Career details</small>
                                                                                </span>
                                                                                <span className="description mb-0">We are friendly Join our team. </span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-xl-4 col-lg-4">
                                                                            <a className="iconbox_block_2" href="/project">
                                                                                <span className="icon_title_wrap">
                                                                                    <span className="iconbox_icon">
                                                                                        <img src="/assets/img/icon/m_03.svg" alt="" />
                                                                                    </span>
                                                                                    <small className="iconbox_title">Project</small>
                                                                                </span>
                                                                                <span className="description mb-0">Explore our all casestudy.</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-xl-4 col-lg-4">
                                                                            <a className="iconbox_block_2" href="/project-details">
                                                                                <span className="icon_title_wrap">
                                                                                    <span className="iconbox_icon">
                                                                                        <img src="/assets/img/icon/m_03.svg" alt="" />
                                                                                    </span>
                                                                                    <small className="iconbox_title">Project details</small>
                                                                                </span>
                                                                                <span className="description mb-0">Explore our all casestudy.</span>
                                                                            </a>
                                                                        </div>
                                                                        <div className="col-xl-4 col-lg-4">
                                                                            <a className="iconbox_block_2" href="/team">
                                                                                <span className="icon_title_wrap">
                                                                                    <span className="iconbox_icon">
                                                                                        <img src="/assets/img/icon/m_04.svg" alt="" />
                                                                                    </span>
                                                                                    <small className="iconbox_title">Our team</small>
                                                                                </span>
                                                                                <span className="description mb-0">We are friendly Join our team.</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <ul className="btns_group mt-80 p-0 ul_li_between">
                                                                        <li>
                                                                            <a className="thm-btn agency-btn megamenu-btn" href="/contact">
                                                                                <span className="text">
                                                                                    Get free consultation
                                                                                </span>
                                                                                <span className="arrow">
                                                                                    <span className="arrow-icon">
                                                                                                                                  <Arrow width={25} height={25} /> 
                                                                                                                                  <Arrow width={25} height={25} /> 
                                                                                                                                  

                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="review_short_info_2">
                                                                                <div className="review_admin_logo">
                                                                                    <img src="/assets/img/logo/client-logo.svg" alt="" />
                                                                                </div>
                                                                                <div className="review_info_content">
                                                                                    <ul className="rating_block unordered_list">
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                    </ul>
                                                                                    <div className="review_counter">From <b>200+</b> reviews</div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="review_short_info_2">
                                                                                <div className="review_admin_logo">
                                                                                    <img src="/assets/img/logo/client-logo2.svg" alt="" />
                                                                                </div>
                                                                                <div className="review_info_content">
                                                                                    <ul className="rating_block unordered_list">
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                        <li><i className="fas fa-star"></i></li>
                                                                                    </ul>
                                                                                    <div className="review_counter">
                                                                                        From <b>150+</b> reviews
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4 col-lg-12 mt-30">
                                                                <div className="mega_menu_left">
                                                                    <div className="author_box">
                                                                        <div className="author_image">
                                                                            <img src="/assets/img/blog/mega-robot.jpg" alt="image" />
                                                                        </div>
                                                                        <div className="author_box_content">
                                                                            <h3 className="mb-60 text-white">
                                                                                Looking for custom AI solutions tailored to you?
                                                                            </h3>
                                                                            <a className="thm-btn agency-btn megamenu-btn" href="/contact">
                                                                                <span className="text">
                                                                                    contact us now
                                                                                </span>
                                                                                <span className="arrow">
                                                                                    <span className="arrow-icon">
                                                                              <Arrow width={25} height={25} /> 
                                                                                                                                  <Arrow width={25} height={25} /> 
                                      
                                                                                    </span>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="author_box">
                                                                        <div className="author_image">
                                                                            <img src="/assets/img/avatar/mega-avatar.jpg" alt="image" />
                                                                        </div>
                                                                        <div className="author_box_content">
                                                                            <p className="mb-45 text-white">
                                                                                “As CEO of Telligy, I’ve focused on clarity, efficiency, and results — turning
                                                                                ideas into real value without reinventing the wheel.”
                                                                            </p>
                                                                            <div className="author_holder">
                                                                                <h4 className="author_name text-white">Sebastian Patel</h4>
                                                                                <span className="author_designation text-white">CEO & Chairman at, <a href="/">Aivora</a></span>
                                                                            </div>
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
                                </li>
                                <li className="menu-item-has-children megamenu">
                                    <a href="#!"><span>Services</span></a>
                                    <ul className="submenu">
                                        <li>
                                            <div className="mega_menu_wrapper">
                                                <div className="container-fluid p-0">
                                                    <div className="mega_menu_wrapper_inner megamenu_widget_wrapper">
                                                        <div className="row justify-content-lg-between">
                                                            <div className="col-xl-9 col-lg-8">
                                                                <div className="mega_menu_box">
                                                                    <div className="megamenu_widget_inner">
                                                                        <div className="row">
                                                                            <div className="col-xl-4 col-lg-6 megamenu-col">
                                                                                <div className="megamenu_widget">
                                                                                    <ul className="icon_list unordered_list_block">
                                                                                        <li>
                                                                                            <a href="/service-details">
                                                                                                <span className="icon_list_text">AI saas product.</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="/service-details">
                                                                                                <span className="icon_list_text">Data and intelligence.</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="/service-details">
                                                                                                <span className="icon_list_text">AI for E-commerce.</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="/service-details">
                                                                                                <span className="icon_list_text">AI consulting.</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xl-8 col-lg-6 megamenu-col">
                                                                                <div className="megamenu_widget">
                                                                                    <ul className="icon_list unordered_list_block">
                                                                                        <li>
                                                                                            <a href="/service-details">
                                                                                                <span className="icon_list_text">AI chatbot virtual.</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="/service-details">
                                                                                                <span className="icon_list_text">AI - marketing.</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="/service-details">
                                                                                                <span className="icon_list_text">Machine learning.</span>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="/service-details">
                                                                                                <span className="icon_list_text">AI integration.</span>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="social_area">
                                                                        <div className="row mt-none-30 align-items-center">
                                                                            <div className="col-xl-4 mt-30">
                                                                                <div className="social_inner ul_li">
                                                                                    <span>Follow Us:</span>
                                                                                    <ul className="social_icons_list unordered_list">
                                                                                        <li>
                                                                                            <a href="#!">
                                                                                            <i className="fab fa-facebook-f"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#!">
                                                                                            <i className="fab fa-linkedin-in"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#!">


<XLogo width={19} height={19} />

                                                                                        
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a href="#!">
                                                                                            <i className="fab fa-dribbble"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xl-8 mt-30">
                                                                                <div className="service_link">
                                                                                    <div className="xb-item--inner">
                                                                                        <div className="xb-item--holder ul_li">
                                                                                            <span className="xb-item--icon"><img src="/assets/img/icon/m_05.svg" alt="icon" /></span>
                                                                                            <h3 className="xb-item--title">
                                                                                                <a href="/contact">Need any custom AI services.</a>
                                                                                            </h3>
                                                                                        </div>
                                                                                        <p className="xb-item--text">Discover our core offerings.</p>
                                                                                    </div>
                                                                                    <a href="/contact" className="xb-item--btn">
                                                                                     <Arrow width={31} height={31} /> 
                                                                                                                                  <Arrow width={31} height={31} /> 
                                      
                                                                                    </a>
                                                                                    <a href="/contact" className="xb-overlay"></a>
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
                                                                            <img src="/assets/img/service/img21.png" alt="image" />
                                                                        </div>
                                                                        <div className="xb-item--holder">
                                                                            <h3 className="xb-item--title">General AI projects..</h3>
                                                                            <p className="xb-item--text">We deliver AI solutions streamline operations, boost efficiency.</p>
                                                                            <a className="thm-btn agency-btn megamenu-btn" href="/project">
                                                                                <span className="text">
                                                                                    read more project
                                                                                </span>
                                                                                <span className="arrow">
                                                                                    <span className="arrow-icon">
                                                                                      <Arrow width={25} height={25} /> 
                                                                                                                                  <Arrow width={25} height={25} /> 
                                      
                                                                                    </span>
                                                                                </span>
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
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="/blog"><span>Blog</span></a>
                                    <ul className="submenu">
                                        <li><a href="/blog"><span>Blog</span></a></li>
                                        <li><a href="/blog-details"><span>Blog Details</span></a></li>
                                    </ul>
                                </li>
                                <li><a href="/contact"><span>Contact Us</span></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-btn">
                        <a className="thm-btn" href="/contact">join now</a>
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
                            <a href="/" rel="home"><img src="/assets/img/logo/logo.svg" alt="" /></a></div>
                            <div className="xb-header-mobile-search xb-hide-xl">
                                <form role="search" action="#">
                                    <input type="text" placeholder="Search..." name="s" className="search-field" />
                                    <button className="search-submit" type="submit"><i className="far fa-search"></i></button>
                                </form>
                            </div>
                            <nav className="xb-header-nav">
                                <ul className="xb-menu-primary clearfix">
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#"><span>Home</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="/"><span>Ai Agency</span></a></li>
                                            <li><a href="/ai-marketing"><span>Ai Marketing</span></a></li>
                                            <li><a href="/ai-chatbot"><span>Ai Chatbot</span></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/about"><span>about us</span></a></li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#!"><span>page</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="/team"><span>Team</span></a></li>
                                            <li><a href="/project"><span>Project</span></a></li>
                                            <li><a href="/project-details"><span>Project Details</span></a></li>
                                            <li><a href="/career"><span>Career</span></a></li>
                                            <li><a href="/career-details"><span>Career Details</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#!"><span>services</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="/service"><span>Services</span></a></li>
                                            <li><a href="/service-details"><span>Service Details</span></a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="/blog"><span>Blog</span></a>
                                        <ul className="sub-menu">
                                            <li><a href="/blog"><span>Blog</span></a></li>
                                            <li><a href="/blog-details"><span>Blog Details</span></a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/contact"><span>Contact Us</span></a></li>
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
