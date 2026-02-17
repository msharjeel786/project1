import Link from "next/link";
import Arrow from '../../svg/arrow.svg'

export default function WhoWeAre() {
 

  return (
  
                    <section id="about" className="about pt-140">
                                           {/* <div className="container">
                                               <div className="sec-title about-sec-title mb-75">
                                                   <span className="sub-title">Who We are?</span>
                                                   <div style={{ display: 'flex', alignItems: 'center' }}>
                                                       <img src="/assets/img/icon/original-66948a0d81d.gif" alt="image" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
                                                       <h2 className="title">
                                                          A strategic digital initiative of the Government of Pakistan, <span><img src="/assets/img/icon/0deec720000b2066289b.gif" alt="image" /></span> <p style={{ fontSize: '35px' }}> established to build a secure, self-reliant, and future-ready digital ecosystem through AI innovation and software development to Cybersecurity </p> 
<span><img src="/assets/img/icon/b10c3e43e836d32554bf.gif" alt="image" /></span>
                                                       </h2>
                                                   </div>
                                               </div>
                                           </div> */}

                                            <div className="container">
                                                           <div className="row justify-content-center">
                                                               <div className="col-lg-11">
                                                                   <div className="sec-title custom-sec-title xb-sec-padding text-center">
                                                                       <span className="sub-title">Who We are?</span>
                                                                       <h2 className="title">
                                                                           <span className="round-img"><img src="/assets/img/icon/b10c3e43e836d32554bf.gif" alt="image" /></span> A secure, self-reliant  digital initiative for Pakistan.
                                                                       </h2>
                                                                       {/* <div className="xb-heading-btn d-inline">
                                                                           <a className="thm-btn agency-btn" href="#services">
                                                                               <span className="text">
                                                                                   view more services
                                                                               </span>
                                                                               <span className="arrow">
                                                                                   <span className="arrow-icon">
                                                                                       <Arrow width={28} height={28} />
                                                                                       <Arrow width={28} height={28} />
                                           
                                                                                   </span>
                                                                               </span>
                                                                           </a>
                                                                       </div> */}
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>



                                           






                                           <div className="xb-about-img-wrap bg_img wow" data-background="/assets/img/bg/testimonial-bg02.png" style={{ backgroundColor: 'white' }}>
                                               <div className="marquee-left">
                                                   <div className="xb-about-img-inner ul_li">
                                                       
                                                       <div className="xb-about-img-item" style={{ borderRadius: '0' }}>
                                                           <div className="xb-img">
                                                               <a href="#!"><img src="/assets/img/about/axi-technologies.png" alt="image" style={{ width: '200px', height: 'auto' }} /></a>
                                                              
                                                           </div>
                                                       </div>
                                                       <div className="xb-about-img-item" style={{ borderRadius: '0' }}>
                                                           <div className="xb-img">
                                                               <a href="#!"><img src="/assets/img/about/mediatez.png" alt="image" style={{ width: '200px', height: 'auto' }} /></a>
                                                             
                                                           </div>
                                                       </div>

                                                       <div className="xb-about-img-item" style={{ borderRadius: '0' }}>
                                                           <div className="xb-img">
                                                               <a href="#!"><img src="/assets/img/about/gelecek.png" alt="image" style={{ width: '200px', height: 'auto' }} /></a>
                                                             
                                                           </div>
                                                       </div>





                                                       <div className="xb-about-img-item" style={{ borderRadius: '0', marginRight: '50px' }}>
                                                           <div className="xb-img">
                                                               <a href="#!"><img src="/assets/img/about/Group.png" alt="image" style={{ width: '100px', height: 'auto' }} /></a>
                                                             
                                                           </div>
                                                       </div>
                                                       <div className="xb-about-img-item" style={{ borderRadius: '0' }}>
                                                           <div className="xb-img">
                                                               <a href="#!"><img src="/assets/img/about/Group 2.png" alt="image" style={{ width: '100px', height: 'auto' }} /></a>
                                                             
                                                           </div>
                                                       </div>
                                                       
                                                   </div>
                                               </div>
                                           </div>
                                       </section>
                   
  );
}
