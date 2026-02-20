import Link from "next/link";

export default function ContactUs() {
  return (
      <section id="contact" className="contact-section pt-150 pb-140 bg_img" data-background="/assets/img/bg/contact-bg.png"> 
                 <div className="container">
                     <div className="row mt-none-50 justify-content-center">
                         <div className="col-lg-6 mt-50">
                             <div className="xb-content-wrap">
                                 <div className="sec-title contact-sec-title">
                                     <span className="sub-title mb-15">Our Achievements</span>
                                     <h2 className="title horizontal-shape">We are trusted <img src="/assets/img/icon/b10c3e43e836d32554bf.gif" alt="shape" /> Nextgeni AI platform</h2>
                                 </div>
                                 <div className="xb-contact-conent wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="600ms">
                                     <div className="xb-contact-inner ul_li_between">
                                         <div className="xb-contact-item">
                                             <h3 className="xb-item--number xb-odm"><span className="xbo" data-count="5">00</span><span className="suffix">K+</span></h3>
                                             <p className="xb-item--content">Projects Successfully Delivered</p>
                                         </div>
                                         <div className="xb-contact-item">
                                             <h3 className="xb-item--number xb-odm"><span className="xbo" data-count="95">00</span><span className="suffix">%</span></h3>
                                             <p className="xb-item--content">Client Satisfaction Rate  on Our Results</p>
                                         </div>
                                     </div>
                                     <div className="shape shape--1"><img src="/assets/img/shape/contact-shape01.png" alt="shape" /></div>
                                     <div className="shape shape--2"><img src="/assets/img/shape/contact-shape02.png" alt="shape" /></div>
                                 </div>
                             </div>
                         </div>
                         <div className="col-lg-6 mt-50">
                             <div className="xb-contact-form xb-border">
                                 <div className="form-heading text-center mb-30">
                                     <h3 className="title">Ready to collaborate with us?</h3>
                                     <p className="sub-title">Who knows where a single message might lead you.</p>
                                 </div>
                                 <form action="#!" className="xb-contact-input-form">
                                     <div className="row mt-none-20">
                                         <div className="col-lg-6 col-md-6 mt-20">
                                             <div className="xb-input-field">
                                                 <input id="author-name" type="text" required />
                                                 <label htmlFor="author-name">Your Name*</label>
                                                 <img src="/assets/img/icon/user-balck-icon.svg" alt="icon" />
                                             </div>
                                         </div>
                                         <div className="col-lg-6 col-md-6 mt-20">
                                             <div className="xb-input-field">
                                                 <input id="author-email" type="email" required />
                                                 <label htmlFor="author-email">Email Address*</label>
                                                 <img src="/assets/img/icon/sms-balck-icon.svg" alt="icon" />
                                             </div>
                                         </div>
                                         <div className="col-lg-6 col-md-6 mt-20">
                                             <div className="xb-input-field">
                                                 <input id="author-phone" type="text" required />
                                                 <label htmlFor="author-phone">Contact No*</label>
                                                 <img src="/assets/img/icon/call-icon02.svg" alt="icon" />
                                             </div>
                                         </div>
                                         <div className="col-lg-6 col-md-6 mt-20">
                                             <div className="xb-input-field xb-select-file">
                                                 <input type="file" required />
                                                 <img src="/assets/img/icon/upload-icon.svg" alt="icon" />
                                                 <span>Attach file...</span>
                                             </div>
                                         </div>
                                         <div className="col-lg-12 col-md-12 mt-20">
                                             <div className="xb-input-field xb-select-field">
                                                 <select className="nice-select">
                                                     <option value="1">Select Service*</option>
                                                     <option value="2">AI - marketing</option>
                                                     <option value="3">AI consulting</option>
                                                     <option value="4">AI chatbot virtual</option>
                                                 </select>
                                                 <img src="/assets/img/icon/list-icon.svg" alt="icon" />
                                             </div>
                                         </div>
                                         <div className="col-lg-12 col-md-12 mt-20">
                                             <div className="xb-input-field xb-massage-field">
                                                 <textarea id="massage" required></textarea>
                                                 <label htmlFor="massage">Your Message..</label>
                                                 <img src="/assets/img/icon/messages-icon.svg" alt="icon" />
                                             </div>
                                         </div>
                                     </div>
                                     <div className="form-submit-btn mt-35">
                                         <button type="submit" className="thm-btn form-btn">
                                             submit here
                                             <span className="xb-icon">
                                                 <img src="/assets/img/icon/rotate-arrow-black02.svg" alt="icon" />
                                                 <img src="/assets/img/icon/rotate-arrow-black02.svg" alt="icon" />
                                             </span>
                                         </button>
                                     </div>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
        
  );
}
