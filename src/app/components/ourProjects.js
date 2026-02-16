
import Link from "next/link";
import Arrow from '../../svg/arrow.svg'


export default function OurProjects() {
 

  return (
   <section id="tools" className="project project-tools pt-135 pb-150">
            <div className="container">
                <div className="sec-title custom-sec-title xb-sec-padding text-center">
                    <span className="sub-title">AI Tools &amp; Agents</span>
                    <h2 className="title"><span className="round-img"><img src="/assets/img/icon/b10c3e43e836d32554bf.gif" alt="image" /></span>  Explore every Products with full detail
                    </h2>
                    <div className="xb-heading-btn d-inline">
                        <a className="thm-btn agency-btn" href="#contact">
                            <span className="text">
                                request a demo
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
            <div className="container mxw-1800">
                <div className="xb-project-wrap">
                    <div className="xb-project-inner">
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/PakOS.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border">
                                    {/* <span className="sub-title">Content Creation</span>  */}
                                    <h2 className="xb-item--title">PakOS - Secure, Lightweight, and Modern Linux</h2>
                                    <p className="xb-item--content">PakOS is a Debian-based Linux distribution built for speed, security, and simplicity. Designed for users in Pakistan but ready for everyone, it delivers a fast, resource-efficient LXQt desktop that runs smoothly on both modern and older PCs.</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/guardy-usb.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border">
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">Advanced USB Security Solutions</h2>
                                    <p className="xb-item--content">Protect your organization from USB-based threats with enterprise-grade security, behavioral analysis, and comprehensive access control..</p>
                                    
                                </div>
                            </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        </section>
  
  );
}
