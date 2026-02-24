"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Arrow from '../../svg/arrow.svg'
import XLogo from '../../svg/xLogo.svg'


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
                                {/* <div className="megamenu_widget_inner">
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
                                </div> */}
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
                                                        <a href="https://pk.linkedin.com/company/axi-technologiespak">
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
                                                            <a href="#contact">Need any custom AI services.</a>
                                                        </h3>
                                                    </div>
                                                    <p className="xb-item--text">Discover our core offerings.</p>
                                                </div>
                                                <a href="#contact" className="xb-item--btn">
                                                 <Arrow width={31} height={31} /> 
                                                                                              <Arrow width={31} height={31} /> 
  
                                                </a>
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
                                        <img src="/assets/img/service/image copy 4.png" alt="image" />
                                    </div>
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--title">General AI projects..</h3>
                                        <p className="xb-item--text">We deliver AI solutions streamline operations, boost efficiency.</p>
                                        <a className="thm-btn agency-btn megamenu-btn" href="#tools">
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