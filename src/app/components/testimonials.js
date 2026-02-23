"use client";
import { useState } from "react";


 



export default function Testimonials() {
     const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const renderText = (text, index) => {
    const isExpanded = expanded[index];
    const shortText =
      text.length > 100 ? text.substring(0, 100) + "..." : text;

    return (
      <>
        <p className="xb-item--content">
          {isExpanded ? text : shortText}
        </p>
        {text.length > 100 && (
          <button
            onClick={() => toggleReadMore(index)}
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer",
              padding: 0,
              fontWeight: "600",
              marginBottom: "10px",
            }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </>
    );
  };


  return (

    
    <section id="testimonials" className="testimonial pb-150 bg_img" data-background="/assets/img/bg/testimonial-bg.png">
                <div className="container">
                    <div className="sec-title sec-title-center tes-sec-title text-center mb-50">
                        <span className="sub-title mb-15">Our Testimonial</span>
                        <h2 className="title">Hear from our<img src="/assets/img/icon/animated-gif03.gif" alt="shape" />happy customers</h2>
                    </div>
                </div>
                <div className="xb-testimonial-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                             <div className="xb-testimonial-item">
                                <div className="xb-item--inner xb-border">
                                    <ul className="xb-item--rating list-unstyled ul_li">
                                        <li><i className="fa-solid fa-star-sharp"></i></li>
                                        <li>Clutch</li>
                                        <li>4.7</li>
                                    </ul>
                                    {renderText("The team at Axi Technology is exceptional! From the initial consultation to the final delivery, they demonstrated technical brilliance and a client-first approach. The software solutions they provided have transformed the way we operate, making us more agile and future-ready. We’re thrilled to have found such a reliable partner.", 1)}
                                    <div className="xb-item--author ul_li">
                                        <div className="xb-item--avatar"><img src="/assets/img/avatar/avatar5.jpg" alt="avatar-image" /></div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name">Dr. Sajid Qama</h3>
                                            <span className="xb-item--desig">NTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                           <div className="xb-testimonial-item">
                                <div className="xb-item--inner xb-border">
                                    <ul className="xb-item--rating list-unstyled ul_li">
                                        <li><i className="fa-solid fa-star-sharp"></i></li>
                                        <li>Clutch</li>
                                        <li>5.0</li>
                                    </ul>
                                    {renderText("Axi Technology has been an absolute game-changer for our business. Their innovative AI solutions have not only streamlined our operations but also significantly boosted our efficiency and customer satisfaction. The team is incredibly knowledgeable, responsive, and dedicated to delivering top-notch results. We couldn't be happier with the partnership and look forward to achieving even greater success together!", 2)}
                                    <div className="xb-item--author ul_li">
                                        <div className="xb-item--avatar"><img src="/assets/img/avatar/avatar3.jpg" alt="avatar-image" /></div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name">M Sheheryar Sultan</h3>
                                            <span className="xb-item--desig">NHA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="xb-testimonial-item">
                                <div className="xb-item--inner xb-border">
                                    <ul className="xb-item--rating list-unstyled ul_li">
                                        <li><i className="fa-solid fa-star-sharp"></i></li>
                                        <li>Clutch</li>
                                        <li>5.0</li>
                                    </ul>
                                    {renderText("Gelecek Solution is recognized as a pioneering force in the tech industry, dedicated to delivering innovative software solutions that enable businesses to achieve their goals efficiently and effectively. Their unwavering commitment to quality and customer satisfaction distinguishes them as a trusted partner for organizations seeking to enhance their digital capabilities.", 2)}
                                    <div className="xb-item--author ul_li">
                                        <div className="xb-item--avatar"><img src="/assets/img/avatar/avatar3.jpg" alt="avatar-image" /></div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name">Hisham Sarwar</h3>
                                            <span className="xb-item--desig">CEO of Innovista</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="swiper-slide">
                            <div className="xb-testimonial-item">
                                <div className="xb-item--inner xb-border">
                                    <ul className="xb-item--rating list-unstyled ul_li">
                                        <li><i className="fa-solid fa-star-sharp"></i></li>
                                        <li>GoodFirms</li>
                                        <li>5.0</li>
                                    </ul>
                                    {renderText("The AI chatbot they developed has transformed our customer service. We now handle 70% of queries with higher customer satisfaction!", 0)}
                                    <div className="xb-item--author ul_li">
                                        <div className="xb-item--avatar"><img src="/assets/img/avatar/avatar4.jpg" alt="avatar-image" /></div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name">Priya Ramirez</h3>
                                            <span className="xb-item--desig">CEO - BrightNest</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="swiper-slide">
                            <div className="xb-testimonial-item">
                                <div className="xb-item--inner xb-border">
                                    <ul className="xb-item--rating list-unstyled ul_li">
                                        <li><i className="fa-solid fa-star-sharp"></i></li>
                                        <li>Clutch</li>
                                        <li>4.7</li>
                                    </ul>
                                    {renderText("The team at Axi Technology is exceptional! From the initial consultation to the final delivery, they demonstrated technical brilliance and a client-first approach. The software solutions they provided have transformed the way we operate, making us more agile and future-ready. We’re thrilled to have found such a reliable partner.", 1)}
                                    <div className="xb-item--author ul_li">
                                        <div className="xb-item--avatar"><img src="/assets/img/avatar/avatar5.jpg" alt="avatar-image" /></div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name">Dr. Sajid Qama</h3>
                                            <span className="xb-item--desig">NTS</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="xb-testimonial-item">
                                <div className="xb-item--inner xb-border">
                                    <ul className="xb-item--rating list-unstyled ul_li">
                                        <li><i className="fa-solid fa-star-sharp"></i></li>
                                        <li>Clutch</li>
                                        <li>5.0</li>
                                    </ul>
                                    {renderText("Axi Technology has been an absolute game-changer for our business. Their innovative AI solutions have not only streamlined our operations but also significantly boosted our efficiency and customer satisfaction. The team is incredibly knowledgeable, responsive, and dedicated to delivering top-notch results. We couldn't be happier with the partnership and look forward to achieving even greater success together!", 2)}
                                    <div className="xb-item--author ul_li">
                                        <div className="xb-item--avatar"><img src="/assets/img/avatar/avatar3.jpg" alt="avatar-image" /></div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--name">M Sheheryar Sultan</h3>
                                            <span className="xb-item--desig">NHA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
  );
}
