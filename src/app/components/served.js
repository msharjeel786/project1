
import Link from "next/link";

export default function Served() {
 

  return (
     <section className="industries pb-165 bg_img" data-background="/assets/img/bg/industries-bg02.png">
            <div className="container">
                <div className="sec-title sec-title-center text-center mb-50">
                    <span className="sub-title mb-15">Industries Served</span>
                    <h2 className="title">Industries we served with AI</h2>
                </div>
            </div>
            <div className="xb-industries-wrapper d-inline-block">
                <div className="marquee-right">
                    <div className="xb-industries-inner ul_li">
                        <div className="xb-industries-item xb-border">
                            <div className="xb-icon">
                                <img src="/assets/img/icon/service-icon01.svg" alt="icon" />
                            </div>
                            <h3 className="xb-title">Education</h3>
                        </div>
                        <div className="xb-industries-item xb-border">
                            <div className="xb-icon">
                                <img src="/assets/img/icon/service-icon02.svg" alt="icon" />
                            </div>
                            <h3 className="xb-title">Logistics</h3>
                        </div>
                        <div className="xb-industries-item xb-border">
                            <div className="xb-icon">
                                <img src="/assets/img/icon/service-icon03.svg" alt="icon" />
                            </div>
                            <h3 className="xb-title">Marketing</h3>
                        </div>
                        <div className="xb-industries-item xb-border">
                            <div className="xb-icon">
                                <img src="/assets/img/icon/service-icon04.svg" alt="icon" />
                            </div>
                            <h3 className="xb-title">Healthcare</h3>
                        </div>
                        <div className="xb-industries-item xb-border">
                            <div className="xb-icon">
                                <img src="/assets/img/icon/service-icon05.svg" alt="icon" />
                            </div>
                            <h3 className="xb-title">Finance</h3>
                        </div>
                        <div className="xb-industries-item xb-border">
                            <div className="xb-icon">
                                <img src="/assets/img/icon/service-icon06.svg" alt="icon" />
                            </div>
                            <h3 className="xb-title">Manufacturing</h3>
                        </div>
                        <div className="xb-industries-item xb-border">
                            <div className="xb-icon">
                                <img src="/assets/img/icon/service-icon07.svg" alt="icon" />
                            </div>
                            <h3 className="xb-title">E-commerce</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}
