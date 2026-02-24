"use client";

import Arrow from '../../svg/arrow.svg';
import { useState, useEffect } from "react";

const SERVICES = [
  {
    id: 'ai-analytics',
    title: 'AI & Data Analytics',
    content: 'Transform raw data into actionable insights with our advanced AI and machine learning solutions.',
    img: '/assets/img/service/Ai.png',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    content: 'Protect your digital assets with enterprise-grade security solutions and 24/7 monitoring.',
    img: '/assets/img/service/Cyber-Security.png',
  },
  {
    id: 'digital-education',
    title: 'Digital Education',
    content: 'Building digital literacy and skills for the workforce of tomorrow.',
    img: '/assets/img/service/Digital_education.png',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    content: 'Scalable, secure, and reliable cloud solutions designed for government and enterprise.',
    img: '/assets/img/service/image.png',
  },
  {
    id: 'data-management',
    title: 'Data Management',
    content: 'Centralize, organize, and leverage your data with modern data management solutions.',
    img: '/assets/img/service/data_management.png',
  },
];

export default function OurMainServices() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (e, service) => {
    e.preventDefault();
    setSelectedService(service);
    setModalOpen(true);
    if (typeof document !== 'undefined') document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
    if (typeof document !== 'undefined') document.body.style.overflow = '';
  };

  useEffect(() => {
    if (!modalOpen) return;
    const handleEscape = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [modalOpen]);

  return (
    <section id="services" className="service pt-135">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="sec-title custom-sec-title xb-sec-padding text-center">
              <span className="sub-title">Our Main Services</span>
              <h2 className="title">
                <span className="round-img"><img src="/assets/img/icon/b10c3e43e836d32554bf.gif" alt="image" /></span> Helping you grow with the power of AI
              </h2>
              <div className="xb-heading-btn d-inline">
                <a className="thm-btn agency-btn" href="#services">
                  <span className="text">view more services</span>
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
      </div>
      <div className="xb-service-wrap bg_img" data-background="/assets/img/bg/service-bg.png">
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            className={`xb-service-item xb-border xb-mouseenter ${index === 0 ? 'active' : ''}`}
            onClick={(e) => openModal(e, service)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(e, service); } }}
          >
            <div className="xb-item--inner">
              <div className="xb-item--item">
                <div className="xb-item--head-item">
                  <h3 className="xb-item--title border-effect">
                    <a href="#services" onClick={(e) => e.preventDefault()}>{service.title}</a>
                  </h3>
                  <a className="xb-item--icon" href="#services" onClick={(e) => e.preventDefault()}>
                    <img src="/assets/img/icon/rotate-arrow-black.svg" alt="arrow" />
                  </a>
                </div>
                <p className="xb-item--content">{service.content}</p>
                <div className="img-hove-effect">
                  <div className="xb-item--img xb-img">
                    <a href="#services" onClick={(e) => e.preventDefault()}><img src={service.img} alt={service.title} /></a>
                    <a href="#services" onClick={(e) => e.preventDefault()}><img src={service.img} alt={service.title} /></a>
                    <a href="#services" onClick={(e) => e.preventDefault()}><img src={service.img} alt={service.title} /></a>
                    <a href="#services" onClick={(e) => e.preventDefault()}><img src={service.img} alt={service.title} /></a>
                  </div>
                </div>
              </div>
              <div className="service-vertical-text">
                <h3 className="xb-item--title">
                  <a href="#services" onClick={(e) => e.preventDefault()}>{service.title}</a>
                </h3>
                <a className="xb-icon" href="#services" onClick={(e) => e.preventDefault()}>
                  <Arrow width={31} height={31} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service detail modal */}
      {modalOpen && selectedService && (
        <div
          className="xb-service-modal-backdrop"
          onClick={closeModal}
          onKeyDown={(e) => e.key === 'Escape' && closeModal()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="xb-service-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="xb-service-modal-content">
              <button
                type="button"
                className="xb-service-modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                <i className="far fa-times"></i>
              </button>
              <div className="xb-service-modal-body">
                <h3 id="service-modal-title" className="xb-service-modal-title">{selectedService.title}</h3>
                <div className="xb-service-modal-img">
                  <img src={selectedService.img} alt={selectedService.title} />
                </div>
                <p className="xb-service-modal-text">{selectedService.content}</p>
                <a href="#contact" className="thm-btn agency-btn" onClick={closeModal}>
                  <span className="text">Get in touch</span>
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
      )}
    </section>
  );
}
