
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
                    <div className="xb-heading-btn d-inline">
                        <a className="thm-btn agency-btn" href="#contact" style={{ paddingLeft: '8px' }}>
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
                        <div className="xb-project-item bg_img" data-background="/assets/img/project/OS.jpg">
                            <div className="xb-project-content">
                                <div className="xb-item--inner xb-border xb-project-card-scroll" style={cardInnerStyle}>
                                    {/* <span className="sub-title">Content Creation</span>  */}
                                    <h2 className="xb-item--title">PakOS - Secure, Lightweight, and Modern Linux</h2>
                                    <p className="xb-item--content">PakOS is a Debian-based Linux distribution built for speed, security, and simplicity. Designed for users in Pakistan but ready for everyone, it delivers a fast, resource-efficient LXQt desktop that runs smoothly on both modern and older PCs.</p>
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
                                    <h2 className="xb-item--title">Advanced USB Security Solutions</h2>
                                    <p className="xb-item--content">Protect your organization from USB-based threats with enterprise-grade security, behavioral analysis, and comprehensive access control..</p>
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
                                    <h2 className="xb-item--title">Invisely - Zero Trust Security Suite for Enterprises
</h2>
                                    <p className="xb-item--content">An indigenous, comprehensive Zero Trust Network Access (ZTNA) platform designed to replace traditional perimeter-based security models like VPNs and NGFWs. </p>
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
                                    <h2 className="xb-item--title">SEIEM (Federated Security Analytics Platform)

</h2>
                                    <p className="xb-item--content">A central security analytics platform that aggregates and correlates logs and events from multiple, disparate SIEM systems (like Splunk, QRadar, Sentinel) into a single pane of glass. Built on Elastic Stack (Elasticsearch, Kibana), it enables cross‑SIEM visibility, eliminates detection silos, and provides unified dashboards for SOC, executive, and compliance reporting.
 </p>
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
                                    <h2 className="xb-item--title">Threat Intelligence Platform (TIP)


</h2>
                                    <p className="xb-item--content">A platform that aggregates, enriches, scores, and operationalizes threat intelligence from open‑source, commercial, and internal sources. It transforms raw indicators of compromise (IOCs) into context‑aware, prioritized intelligence and automatically disseminates actionable data to security tools such as SIEM, SOAR, and firewalls.

 </p>
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
                                    <h2 className="xb-item--title">0xCrawler (Automated Recon & Vulnerability Orchestration)

</h2>
                                    <p className="xb-item--content">Our 0xCrawler automated tool streamlines reconnaissance and vulnerability scanning by integrating powerful open-source technologies into a unified workflow. It minimizes manual effort and accelerates threat detection, empowering modern security teams with faster, more efficient, and comprehensive insights.</p>
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
                                    <h2 className="xb-item--title">DLP (Data Loss Prevention)



</h2>
                                    <p className="xb-item--content">A comprehensive Data Loss Prevention system designed to monitor, detect, and protect sensitive data across network traffic, endpoints, and storage environments. It prevents unauthorized data exfiltration, ensures compliance with regulatory standards, and safeguards confidential information such as PII, financial data, and intellectual property through encryption, access controls, real-time monitoring, and automated policy enforcement.

 </p>
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
                                    <h2 className="xb-item--title">FIRETHORN
</h2>
                                    <p className="xb-item--content">FIRETHORN is a unified security operations platform built to enhance CERT and SOC effectiveness by delivering end-to-end threat visibility, faster detection, and streamlined response across complex IT environments. </p>
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
                                    <p className="xb-item--content">The system offers full session recording and command-level logging to capture every user action for complete visibility. It provides real-time monitoring with replay capability, enabling administrators to review activities live or retrospectively. All audit records are immutable and tamper-proof, ensuring integrity and regulatory compliance.</p>
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
                                    <h2 className="xb-item--title">Vision Lab Facial Recognition Solution</h2>
                                    <p className="xb-item--content">Vision Lab Facial Recognition Solution is an AI-driven platform that performs secure and efficient facial recognition. It's a custom-built solution designed to perform facial recognition at multiple levels, from live streams to stored data. 
It provides a highly accurate and efficient way to identify and track individuals in various conditions, such as age differences, partially covered faces, and low-light environments.</p>
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
                                    <p className="xb-item--content">The PAF-IAST Admissions Chatbot is a dedicated 24/7 virtual assistant designed to streamline the admissions process for prospective students of the Pak-Austria Fachhochschule Institute of Applied Sciences & Technology. It provides instant, accurate, and comprehensive guidance on all admission-related queries from eligibility and programs to fees and facilities through an intuitive conversational interface, ensuring a seamless and informed application experience.</p>
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
                                    <p className="xb-item--content">It is designed to act as a primary point of contact for website visitors, providing quick and accurate information about the company's products and services.
</p>
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
                                    <p className="xb-item--content">AXI HR Bot is an HR bot, designed to automate the process of screening and scoring job applications. It provides a centralized system for handling job details and CVs from initial input to final analysis.</p>
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
                                    <p className="xb-item--content">SLAC (Smart Learning Assessment Certification) is a comprehensive, secure, and accessible online examination and certification platform designed to authenticate talent and expertise through proctored, technology-driven assessments. The platform facilitates seamless exam creation, administration, and participation while deploying advanced anti-cheating measures to ensure integrity. It supports multiple languages including full Urdu support and technical content, making it ideal for educational, professional, and technical certification purposes across diverse regions and disciplines.</p>
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
                                    <p className="xb-item--content">The BSVT FPV Drone series represents a professional-grade lineup of quadcopter and hexacopter systems engineered for long-range, high-endurance dual-role missions. These drones are equipped for Intelligence, Surveillance, and Reconnaissance (ISR) as a "Hunter" and can be configured for precision payload delivery as a "Killer." Featuring carbon fiber fuselages, multi-band communication links, day/night imaging systems, and advanced autonomous capabilities.</p>
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
