import Image from "next/image";
import Link from "next/link";

export default function Professional() {
    const itemText = "PakOS - Secure, Lightweight, and Modern Linux";

    const marqueeRow1 = [
        { tag: "post", number: "300", text: itemText },
        { tag: "GET", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "GET", number: "200", text: itemText },
        { tag: "post", number: "300", text: itemText },
        { tag: "GET", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "GET", number: "200", text: itemText },
        { tag: "GET", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "GET", number: "200", text: itemText }
    ];

    const marqueeRow2 = [
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "300", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "300", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "300", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "300", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "300", text: itemText }
    ];

    const marqueeRow3 = [
        { tag: "post", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" }
    ];

    const marqueeRow4 = [
        { tag: "post", number: "300", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "GET", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "300", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "GET", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "GET", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" }
    ];

    const marqueeRow5 = [
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "300", text: itemText },
        { tag: "get", number: "100", text: itemText },
        { tag: "post", number: "300", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "300", text: itemText },
        { tag: "get", number: "100", text: itemText },
        { tag: "post", number: "300", text: itemText },
        { tag: "get", number: "100", text: itemText },
        { tag: "post", number: "300", text: itemText }
    ];

    const marqueeRow6 = [
        { tag: "post", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "get", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "post", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "get", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" },
        { tag: "get", number: "200", text: itemText },
        { tag: "delate", number: "500", text: itemText, tagClass: "tag-red", numberClass: "number-red" }
    ];

    const renderRow = (items) =>
        items.map((item, index) => (
            <div className="xb-marquee-item" key={`${item.tag}-${item.number}-${index}`}>
                <span className={`tag${item.tagClass ? ` ${item.tagClass}` : ""}`}>
                    {item.tag}
                </span>
                <span className={`number${item.numberClass ? ` ${item.numberClass}` : ""}`}>
                    {item.number}
                </span>
                <p>{item.text}</p>
            </div>
        ));

  return (
     <section className="industries pos-rel pt-145 pb-50 bg_img">
                        <div className="container">
                <div className="sec-title sec-title-center text-center mb-40">
                    <span className="sub-title mb-15">Professional & Trust-Building</span>
                    <h2 className="title">Real-time AI for smarter business</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="xb-industries-wrapper">
                            <div className="xb-industries-marquee">
                                <div className="xb-indus-marquee-inner">
                                    <div className="xb-marquee-items marquee-horizontal">
                                        {renderRow(marqueeRow1)}
                                        {renderRow(marqueeRow1)}
                                    </div>
                                    <div className="xb-marquee-items marquee-horizontal-bottom">
                                        {renderRow(marqueeRow2)}
                                        {renderRow(marqueeRow2)}
                                    </div>
                                    <div className="xb-marquee-items marquee-horizontal">
                                        {renderRow(marqueeRow3)}
                                        {renderRow(marqueeRow3)}
                                    </div>
                                    <div className="xb-marquee-items marquee-horizontal-bottom">
                                        {renderRow(marqueeRow4)}
                                        {renderRow(marqueeRow4)}
                                    </div>
                                    <div className="xb-marquee-items marquee-horizontal">
                                        {renderRow(marqueeRow5)}
                                        {renderRow(marqueeRow5)}
                                    </div>
                                    <div className="xb-marquee-items marquee-horizontal-bottom">
                                        {renderRow(marqueeRow6)}
                                        {renderRow(marqueeRow6)}
                                    </div>
                                </div>
                                <div className="xb-gardiant-shape">
                                    <img src="/assets/img/industries/gradient.png" alt="gardiant-image" />
                                </div>
                                <div className="xb-gardiant-shape-two updown-2">
                                    <img src="/assets/img/industries/gradient02.png" alt="gardiant-image" />
                                </div>
                            </div>
                            <div
                                className="xb-industries-logo professional-belt-logo wow zoomIn"
                                data-wow-delay="0ms"
                                data-wow-duration="600ms"
                                style={{
                                  display: 'flex',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                  width: '100%',
                                  margin: '0 auto',
                                }}
                            >
                                <img
                                    src="/assets/img/industries/indus-logo.png"
                                    alt="logo"
                                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indu-shape">
                    <img src="/assets/img/shape/indus-shape.png" alt="shape" />
                </div>
            </div>
            <div className="xb-gradiant-line">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
  );
}
