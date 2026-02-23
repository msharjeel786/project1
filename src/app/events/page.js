'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import { events } from '@/app/data/events';

function EventsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const eventIdFromUrl = searchParams.get('event');
  const initialId = eventIdFromUrl ? parseInt(eventIdFromUrl, 10) : events[0]?.id || 1;

  const validId = events.some((e) => e.id === initialId) ? initialId : events[0]?.id || 1;

  const [featuredId, setFeaturedId] = useState(validId);

  useEffect(() => {
    if (eventIdFromUrl) {
      const id = parseInt(eventIdFromUrl, 10);
      if (events.some((e) => e.id === id)) {
        setFeaturedId(id);
      }
    }
  }, [eventIdFromUrl]);

  const featuredRef = useRef(null);
  const featuredEvent = events.find((e) => e.id === featuredId) || events[0];
  const otherEvents = events.filter((e) => e.id !== featuredId);
  const galleryImages = featuredEvent.images ?? [featuredEvent.image];

  const selectEvent = (id) => {
    setFeaturedId(id);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('event', String(id));
    router.push(`/events?${newParams.toString()}`, { scroll: false });
    featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1e' }}>
      <Navbar />

      {/* Hero Section with Gradient */}
      <section style={{
        position: 'relative',
        paddingTop: '150px',
        paddingBottom: '80px',
        background: 'linear-gradient(135deg, #0a0f1e 0%, #1a1f35 50%, #0f1729 100%)',
        overflow: 'hidden'
      }}>
        {/* Gradient Overlay Effects */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(18, 255, 172, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(25, 155, 241, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        {/* Animated Background Shapes */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(18, 255, 172, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '15%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(25, 155, 241, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            {/* Icon/Badge */}
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px',
              padding: '10px 24px',
              background: 'rgba(18, 255, 172, 0.1)',
              border: '1px solid rgba(18, 255, 172, 0.2)',
              borderRadius: '50px',
              marginBottom: '30px',
              animation: 'slideDown 0.8s ease-out'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                background: '#12ffac',
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite'
              }}></span>
              <span style={{ 
                color: '#12ffac', 
                fontSize: '14px', 
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Events & Gallery
              </span>
            </div>

            {/* Main Title with Gradient */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #ffffff 0%, #12ffac 50%, #199bf1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'slideUp 0.8s ease-out 0.2s both'
            }}>
              Moments That Define Our Journey
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              margin: '0 auto',
              animation: 'slideUp 0.8s ease-out 0.4s both'
            }}>
              Highlights from conferences, workshops, and milestones shaping Pakistan's digital ecosystem and technological advancement.
            </p>

            {/* Decorative Line */}
            <div style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #12ffac, transparent)',
              margin: '40px auto 0',
              animation: 'expandWidth 1s ease-out 0.6s both'
            }}></div>
          </div>
        </div>
      </section>

      {/* Featured Event - Big View */}
      <section ref={featuredRef} style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, rgba(18, 255, 172, 0.1), rgba(25, 155, 241, 0.1))',
            border: '1px solid rgba(18, 255, 172, 0.2)',
            borderRadius: '50px',
            marginBottom: '30px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#12ffac" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span style={{ 
              color: '#12ffac', 
              fontSize: '14px', 
              fontWeight: '600',
              letterSpacing: '0.5px'
            }}>
              Featured Event
            </span>
          </div>

          <article style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #1a1f35 0%, #0f1729 100%)',
            border: '1px solid rgba(18, 255, 172, 0.1)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(18, 255, 172, 0.1)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(18, 255, 172, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(18, 255, 172, 0.1)';
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              {/* Image Section */}
              <div style={{ 
                position: 'relative', 
                minHeight: '450px',
                overflow: 'hidden'
              }}>
                {galleryImages.length === 1 ? (
                  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <img
                      src={galleryImages[0]}
                      alt={featuredEvent.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    {/* Gradient Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(18, 255, 172, 0.1) 0%, rgba(25, 155, 241, 0.1) 100%)',
                      mixBlendMode: 'overlay',
                      pointerEvents: 'none'
                    }}></div>
                  </div>
                ) : (
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '4px',
                    padding: '4px',
                    width: '100%',
                    height: '100%'
                  }}>
                    {galleryImages.map((src, idx) => (
                      <div key={idx} style={{ 
                        overflow: 'hidden', 
                        borderRadius: '8px',
                        position: 'relative'
                      }}>
                        <img
                          src={src}
                          alt={`${featuredEvent.title} - ${idx + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease'
                          }}
                          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'clamp(2rem, 5vw, 4rem)',
                position: 'relative'
              }}>
                {/* Category Badge */}
                <span style={{
                  display: 'inline-block',
                  width: 'fit-content',
                  padding: '10px 24px',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  borderRadius: '50px',
                  background: 'linear-gradient(135deg, rgba(18, 255, 172, 0.15), rgba(25, 155, 241, 0.15))',
                  border: '1px solid rgba(18, 255, 172, 0.3)',
                  color: '#12ffac',
                  marginBottom: '24px',
                  backdropFilter: 'blur(10px)'
                }}>
                  {featuredEvent.category}
                </span>

                {/* Title */}
                <h2 style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                  fontWeight: '800',
                  lineHeight: '1.3',
                  color: '#ffffff',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #12ffac 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {featuredEvent.title}
                </h2>

                {/* Date (if available) */}
                {featuredEvent.date && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '15px',
                    marginBottom: '20px'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <time dateTime={featuredEvent.date}>{featuredEvent.date}</time>
                  </div>
                )}

                {/* Description */}
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '30px'
                }}>
                  {featuredEvent.description}
                </p>

                {/* Decorative Element */}
                <div style={{
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #12ffac, #199bf1)',
                  borderRadius: '2px'
                }}></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Other Events Grid */}
      <section style={{
        padding: '80px 0 120px',
        background: 'linear-gradient(180deg, #0a0f1e 0%, #0f1729 100%)',
        position: 'relative'
      }}>
        <div className="container">
          {/* Section Header */}
          <div style={{ marginBottom: '50px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '40px',
                height: '3px',
                background: 'linear-gradient(90deg, #12ffac, #199bf1)',
                borderRadius: '2px'
              }}></div>
              <h2 style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: '800',
                color: '#ffffff',
                margin: 0
              }}>
                More Events
              </h2>
            </div>
            <p style={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '600px'
            }}>
              Explore our journey through various milestones and memorable moments
            </p>
          </div>

          {/* Events Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
            gap: '30px'
          }}>
            {otherEvents.map((event) => (
              <article
                key={event.id}
                role="button"
                tabIndex={0}
                onClick={() => selectEvent(event.id)}
                onKeyDown={(e) => e.key === 'Enter' && selectEvent(event.id)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #1a1f35 0%, #0f1729 100%)',
                  border: '1px solid rgba(18, 255, 172, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(18, 255, 172, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(18, 255, 172, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.borderColor = 'rgba(18, 255, 172, 0.1)';
                }}
              >
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '62.5%',
                  overflow: 'hidden'
                }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1) rotate(2deg)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                  />
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(180deg, transparent 0%, rgba(10, 15, 30, 0.8) 100%)',
                    pointerEvents: 'none'
                  }}></div>
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  {/* Category Badge */}
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    borderRadius: '50px',
                    background: 'rgba(18, 255, 172, 0.15)',
                    border: '1px solid rgba(18, 255, 172, 0.3)',
                    color: '#12ffac',
                    marginBottom: '12px'
                  }}>
                    {event.category}
                  </span>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '1.4',
                    color: '#ffffff',
                    marginBottom: '8px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#12ffac'}
                  onMouseLeave={(e) => e.target.style.color = '#ffffff'}>
                    {event.title}
                  </h3>

                  {/* Excerpt */}
                  {event.excerpt && (
                    <p style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: 'rgba(255, 255, 255, 0.6)',
                      marginTop: '10px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {event.excerpt}
                    </p>
                  )}

                  {/* Read More Link */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '16px',
                    color: '#12ffac',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'gap 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.gap = '12px'}
                  onMouseLeave={(e) => e.currentTarget.style.gap = '8px'}>
                    <span>View Details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Keyframes for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 100px;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          article > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={
      <div style={{ 
        minHeight: '100vh', 
        background: '#0a0f1e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center' 
      }}>
        <div style={{
          color: '#12ffac',
          fontSize: '18px',
          fontWeight: '600'
        }}>
          Loading events...
        </div>
      </div>
    }>
      <EventsContent />
    </Suspense>
  );
}