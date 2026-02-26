
import Link from "next/link";
import Arrow from '../../svg/arrow.svg'

const cardInnerStyle = {
  display: 'block',
  maxHeight: 'min(55vh, 480px)',
  minHeight: '280px',
  overflowY: 'auto',
  overflowX: 'hidden',
  WebkitOverflowScrolling: 'touch',
  paddingBottom: '56px',
  scrollBehavior: 'smooth',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '100%',
};

export default function OurProjects() {
 

  return (
   <section id="tools" className="project project-tools pt-135 pb-150">
            <div className="container">
                <div className="sec-title custom-sec-title xb-sec-padding text-center">
                    <span className="sub-title">Our  Products</span>
                    <h2 className="title"><span className="round-img"><img src="/assets/img/icon/b10c3e43e836d32554bf.gif" alt="image" /></span>  Explore every Products with full detail
                    </h2>
                    <div className="xb-heading-btn d-inline" style={{ paddingLeft: '8px' }}>
                        <a className="thm-btn pl-[8px] agency-btn" href="#contact">
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
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/mac-os.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span>  */}
                                    <h2 className="xb-item--title">PakOS</h2>
                                    <p className="xb-item--content">Debian-based Linux for speed, security, and simplicity. Fast LXQt desktop for modern and older PCs.</p>
                                       <div className="xb-item---btn mt-70">
                                        <a className="thm-btn agency-btn" href="https://axitechnologies.ai/pak-os-linux/" target="_blank" rel="noopener noreferrer">
                                            <span className="text">
                                                read more
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
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/USB_feature.jpg">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">Advanced USB Security</h2>
                                    <p className="xb-item--content">Enterprise-grade USB security with behavioral analysis and access control against USB-based threats.</p>
                                       <div className="xb-item---btn mt-70">
                                        <a className="thm-btn agency-btn" href="https://axitechnologies.ai/guardyusb/" target="_blank" rel="noopener noreferrer">
                                            <span className="text">
                                                read more
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
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">Invisely – Zero Trust Security</h2>
                                    <p className="xb-item--content">ZTNA platform that replaces VPNs and NGFWs with comprehensive Zero Trust access.</p>
                                       <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy1.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">SEIEM (Federated Security Analytics)</h2>
                                    <p className="xb-item--content">Unified analytics from multiple SIEMs into one dashboard for SOC and compliance.</p>
    <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy3.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">Threat Intelligence Platform (TIP)</h2>
                                    <p className="xb-item--content">Aggregates and enriches threat intel from multiple sources; feeds SIEM, SOAR, and firewalls.</p>
    <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy6.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">0xCrawler</h2>
                                    <p className="xb-item--content">Automated recon and vulnerability scanning in one workflow for faster threat detection.</p>
                                       <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy4.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">DLP (Data Loss Prevention)</h2>
                                    <p className="xb-item--content">Monitor and protect sensitive data across network, endpoints, and storage; prevent exfiltration and ensure compliance.</p>
    <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy5.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">FIRETHORN</h2>
                                    <p className="xb-item--content">Unified security operations platform for CERT/SOC: threat visibility, detection, and response.</p>
                                       <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy7.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">PAM (Privileged Access Management)</h2>
                                    <p className="xb-item--content">Session recording, command logging, and real-time replay. Immutable audit trail for compliance.</p>
                                       <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy8.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">Vision Lab Facial Recognition</h2>
                                    <p className="xb-item--content">AI-driven facial recognition for live streams and stored data; accurate in varied conditions.</p>
   <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                    </div>
                            </div>
                        </div>
                    
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy10.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">PAK-Austria Chatbot</h2>
                                    <p className="xb-item--content">24/7 admissions assistant for PAF-IAST: eligibility, programs, fees, and application guidance.</p>
                                       <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                    </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy11.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">AXI Chatbot</h2>
                                    <p className="xb-item--content">Primary contact for visitors: quick, accurate answers on products and services.</p>
   <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                    </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy12.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">AXI HR Bot</h2>
                                    <p className="xb-item--content">Automates screening and scoring of job applications and CVs from input to analysis.</p>
                                       <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                    </div>
                            </div>
                        </div>
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy15.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">SLAC (Smart Learning Assessment Certification)</h2>
                                    <p className="xb-item--content">Secure online exams and certification with proctoring, anti-cheating, and multi-language support including Urdu.</p>
                                       <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                             </div>
                            </div>
                        </div>
                         
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/imageCopy14.png">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span> */}
                                    <h2 className="xb-item--title">BSVT FPV Drone Series</h2>
                                    <p className="xb-item--content">Professional quadcopters and hexacopters for ISR and payload delivery; long-range, day/night, autonomous.</p>
                                       <div className="xb-item---btn mt-70">
                                        <span className="thm-btn agency-btn read-more-disabled">
                                            <span className="text">
                                                read more
                                            </span>
                                            <span className="arrow">
                                                <span className="arrow-icon">
                                                   <Arrow width={28} height={28} />
                                 <Arrow width={28} height={28} />
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    
                    </div>
                            </div>
                        </div>
                     
                         
                    </div>
                </div>
            </div>
        </section>
  
  );
}
