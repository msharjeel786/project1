import Arrow from '../../svg/arrow.svg'

import Link from "next/link";

export default function OurLatestNews() {
  
  return (
    <section id='blogs' className="blog pt-150 bg_img" data-background="/assets/img/bg/blog-bg.png">
            <div className="container">
                <div className="row mt-none-30">
                    <div className="col-lg-4 mt-30">
                        <div className="sec-title blog-sec-title mb-70">
                            <span className="sub-title mb-15">Events & Gallery</span>
                            <h2 className="title">Highlights from conferences, workshops, and milestones shaping Pakistan's digital ecosystem.<img src="/assets/img/icon/original-9e54f87f13d.gif" alt="shape" /></h2>
                        </div>
                        <div className="blog-btn">
                            <a className="thm-btn agency-btn" href="/events">
                                <span className="text">
                                   View All Events
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
                    <div className="col-lg-8 mt-30">
                        <div className="row mt-none-30">
                            <div className="col-lg-12 mt-30">
                                <div className="xb-blog-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                                    <div className="xb-item--inner img-hove-effect xb-border">
                                        <div className="xb-img">
                                            <a href="/blog-details"><img src="/assets/img/blog/image.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/image.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/image.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/image.png    " alt="image" /></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <ul className="xb-item--meta list-unstyled ul_li">
                                                <li><img src="/assets/img/icon/blog-icon01.svg" alt="icon" />Chinese Delegation Visit</li>
                                                <li><img src="/assets/img/icon/blog-icon02.svg" alt="icon" />Delegation</li>
                                            </ul>
                                            <h2 className="xb-item--title">
                                                <a href="/blog-details">We at AXI Systems were honored to host a distinguished delegation at our headquarters..</a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-30">
                                <div className="xb-blog-item xb-small-blog-item wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">
                                    <div className="xb-item--inner img-hove-effect xb-border">
                                        <div className="xb-img">
                                            <a href="/blog-details"><img src="/assets/img/blog/52.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/52.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/52.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/52.png" alt="image" /></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <ul className="xb-item--meta list-unstyled ul_li">
                                                <li><img src="/assets/img/icon/blog-icon01.svg" alt="icon" />Secretary IT Visit — Mr. Zarrar Khan</li>
                                                <li><img src="/assets/img/icon/blog-icon02.svg" alt="icon" />Visit </li>
                                            </ul>
                                            <h2 className="xb-item--title">
                                                <a href="/blog-details">Mr. Zarrar Khan, Secretary IT from the Ministry ..</a>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 mt-30">
                                <div className="xb-blog-item xb-small-blog-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                    <div className="xb-item--inner img-hove-effect xb-border">
                                        <div className="xb-img">
                                            <a href="/blog-details"><img src="/assets/img/blog/Crypto Minister Post.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/Crypto Minister Post.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/Crypto Minister Post.png" alt="image" /></a>
                                            <a href="/blog-details"><img src="/assets/img/blog/Crypto Minister Post.png" alt="image" /></a>
                                        </div>
                                        <div className="xb-item--holder">
                                            <ul className="xb-item--meta list-unstyled ul_li">
                                                <li><img src="/assets/img/icon/blog-icon01.svg" alt="icon" />Crypto Minister</li>
                                                <li><img src="/assets/img/icon/blog-icon02.svg" alt="icon" />Ceremony </li>
                                            </ul>
                                            <h2 className="xb-item--title">
                                                <a href="/blog-details">We at AXI Systems were honored to host Mr. Bilal Bin Saqib MBE ..</a>
                                            </h2>
                                        </div>
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
