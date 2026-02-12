
import Link from "next/link";
import DynamicSvg from "../components/dynamicSvg";

export default function WhyChoose() {
 

  return (
   <section id="why" className="feature pt-145 feature-friendly">
                            <div className="container">
                                <div className="sec-title sec-title-center fea-sec-title text-center mb-50">
                                    <span className="sub-title">Why Should Choose Us</span>
                                    <h2 className="title">Your success <span><img src="/assets/img/icon/diamond-icon02.gif" alt="icon" /></span> is our mission</h2>
                                </div>
                                <div className="row mt-none-30 align-items-center">
                                    <div className="col-lg-4 col-md-6 mt-30">
                                        <div className="xb-feature-left-item">
                                            <div className="xb-feature-item xb-feature-item2 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
                                                <div className="xb-item--inner justify-content-end xb-border">
                                                    <h2 className="xb-item--title text-end">Secure, ethical & <br /> scalable AI</h2>
                                                    <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon01.svg" alt="icon" /></span>
                                                </div>
                                            </div>
                                            <div className="xb-feature-item xb-feature-item2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                                <div className="xb-item--inner justify-content-end xb-border">
                                                    <h2 className="xb-item--title text-end">Custom-built <br /> solutions that fit you</h2>
                                                    <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon02.svg" alt="icon" /></span>
                                                </div>
                                            </div>
                                            <div className="xb-feature-item xb-feature-item2 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                                <div className="xb-item--inner justify-content-end xb-border">
                                                    <h2 className="xb-item--title text-end">Secure, ethical, and <br /> responsible AI</h2>
                                                    <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon03.svg" alt="icon" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 order-lg-last mt-30">
                                        <div className="xb-feature-right-item">
                                            <div className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
                                                <div className="xb-item--inner xb-border">
                                                    <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon04.svg" alt="icon" /></span>
                                                    <h2 className="xb-item--title">Expert team of AI <br /> specialists</h2>
                                                </div>
                                            </div>
                                            <div className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                                <div className="xb-item--inner xb-border">
                                                    <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon05.svg" alt="icon" /></span>
                                                    <h2 className="xb-item--title">Speed without <br /> sacrificing quality</h2>
                                                </div>
                                            </div>
                                            <div className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                                <div className="xb-item--inner xb-border">
                                                    <span className="xb-item--icon"><img src="/assets/img/icon/fea-small-icon06.svg" alt="icon" /></span>
                                                    <h2 className="xb-item--title">Client-centered, <br /> business-focused</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 mt-30">       
<DynamicSvg />
                                    </div>
                                </div>
                            </div>
                        </section>
                    

  );
}
