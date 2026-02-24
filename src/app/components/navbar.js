"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const HOME_SECTIONS = ["home", "about", "tools", "contact", "testimonials", "blogs"];

export default function Navbar() {
  const pathname = usePathname();
  const path = pathname ?? "";
  const isOnHomePage = path === "/" || path === "";
  const isBlogPage = path.startsWith("/blog") || path.startsWith("/events");
  const isEventsOrBlogPage = path.startsWith("/events") || path.startsWith("/blog");

  const [activeSection, setActiveSection] = useState("home");
  const ratiosRef = useRef({});

  useEffect(() => {
    if (!isOnHomePage || typeof window === "undefined") return;
    const hashToSection = { about: "about", tools: "tools", contact: "contact", blogs: "blogs" };
    const applyHash = () => {
      const hash = (window.location.hash || "").replace("#", "").toLowerCase();
      if (hash && hashToSection[hash]) setActiveSection(hashToSection[hash]);
    };
    applyHash();
    const hash = (window.location.hash || "").replace("#", "").toLowerCase();
    let t;
    if (hash && hashToSection[hash]) {
      const el = document.getElementById(hash);
      if (el) t = setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
    window.addEventListener("hashchange", applyHash);
    return () => {
      window.removeEventListener("hashchange", applyHash);
      if (t) clearTimeout(t);
    };
  }, [isOnHomePage]);

  useEffect(() => {
    if (!isOnHomePage) {
      setActiveSection("home");
      return;
    }
    if (typeof document === "undefined") return;

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        if (HOME_SECTIONS.includes(id)) ratiosRef.current[id] = entry.intersectionRatio;
      });
      const entries_entries = Object.entries(ratiosRef.current).filter(([, r]) => r > 0);
      if (entries_entries.length === 0) return;
      const best = entries_entries.reduce((a, b) => {
        if (Math.abs(a[1] - b[1]) < 0.05) {
          return HOME_SECTIONS.indexOf(a[0]) >= HOME_SECTIONS.indexOf(b[0]) ? a : b;
        }
        return a[1] >= b[1] ? a : b;
      })[0];
      setActiveSection(best);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-8% 0px -35% 0px",
      threshold: [0, 0.05, 0.1, 0.2, 0.35, 0.5, 0.75, 1],
    });

    let cancelled = false;
    const observed = [];

    const startObserving = () => {
      if (cancelled) return;
      HOME_SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        ratiosRef.current[id] = 0;
        observer.observe(el);
        observed.push(el);
      });
    };

    const trySetup = (attempt = 0) => {
      if (cancelled) return;
      const first = document.getElementById("home");
      if (first) {
        startObserving();
        return;
      }
      if (attempt < 8) {
        setTimeout(() => trySetup(attempt + 1), 80);
      }
    };

    const t = setTimeout(() => trySetup(0), 50);

    return () => {
      cancelled = true;
      clearTimeout(t);
      observed.forEach((el) => observer.unobserve(el));
    };
  }, [isOnHomePage]);

  useEffect(() => {
    if (typeof document === "undefined" || typeof window === "undefined") return;
    const pathFromWindow = window.location.pathname || "";
    const onEventsOrBlog = pathFromWindow.startsWith("/events") || pathFromWindow.startsWith("/blog");
    if (!onEventsOrBlog && !isEventsOrBlogPage) return;
    const apply = () => {
      const header = document.getElementById("xb-header-area");
      if (!header) return;
      const firstLis = header.querySelectorAll(".xb-nav__item:first-child, .xb-nav .xb-nav__item:first-child");
      firstLis.forEach((li) => {
        li.classList.remove("xb-nav__item--active");
        li.classList.add("xb-nav-home-inactive");
      });
      const blogLinks = header.querySelectorAll("a[href='#blogs'], a[href='/events']");
      blogLinks.forEach((a) => {
        const li = a.closest(".xb-nav__item");
        if (li) {
          li.classList.add("xb-nav__item--active");
          li.classList.remove("xb-nav-home-inactive");
          const link = li.querySelector(".xb-nav__link");
          if (link) link.classList.add("xb-nav__link--active");
        }
      });
    };
    apply();
    const t1 = setTimeout(apply, 50);
    const t2 = setTimeout(apply, 200);
    const t3 = setTimeout(apply, 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isEventsOrBlogPage, path]);

  const homeActive = isOnHomePage && activeSection === "home";
  const aboutActive = isOnHomePage && activeSection === "about";
  const servicesActive = isOnHomePage && activeSection === "tools";
  const blogActive = isOnHomePage ? (activeSection === "testimonials" || activeSection === "blogs") : isBlogPage;
  const contactActive = isOnHomePage && activeSection === "contact";

  const homeLiClass = "xb-nav__item" +
    (isEventsOrBlogPage ? " xb-nav-home-inactive" : "") +
    (homeActive ? " xb-nav__item--active" : "");
  const anyNavSelected = homeActive || aboutActive || servicesActive || blogActive || contactActive;
  const homeLiClassResolved = isEventsOrBlogPage
    ? "xb-nav__item xb-nav-home-inactive"
    : (anyNavSelected ? homeLiClass : "xb-nav__item");
  const mobileHomeLiClass = "xb-nav__item" +
    (isEventsOrBlogPage ? " xb-nav-home-inactive" : "") +
    (homeActive ? " xb-nav__item--active" : "");
  const mobileHomeLiClassResolved = isEventsOrBlogPage
    ? "xb-nav__item xb-nav-home-inactive"
    : (anyNavSelected ? mobileHomeLiClass : "xb-nav__item");

  const navLink = (href, label, isActive) => (
    <a
      href={href}
      className={"xb-nav__link" }
    //   style={isActive ? { backgroundColor: '#02ff97', color: '#fff', borderRadius: '6px', boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.25)' } : {}}
    >
      {label}
    </a>
  );

  return (
    
       <header id="xb-header-area" className="header-area header-style--one header-transparent is-sticky" data-pathname={path}> 
        <div className="xb-header stricky">
            <div className="container mxw-1650">
                <div className="header__wrap ul_li_between">
                    <div className="xb-header-logo">
                        <a href="/" className="logo1">
                            <img src="/assets/img/logo/AXISystemslogofotter.svg" alt="" style={{ width: '200px', height: 'auto' }} />
                        </a>
                    </div>
                    <div className="main-menu__wrap  navbar navbar-expand-lg p-0">
                        <nav className="main-menu collapse navbar-collapse">
                            <ul className="xb-nav">
                                <li className={homeLiClassResolved}>{navLink("/", "Home", homeActive)}</li>
                                <li className={"xb-nav__item" + (aboutActive ? " xb-nav__item--active" : "")}>{navLink("#about", "About Us", aboutActive)}</li>
                                <li className={"xb-nav__item" + (servicesActive ? " xb-nav__item--active" : "")}>{navLink("#tools", "Services", servicesActive)}</li>
                                <li className={"xb-nav__item" + (blogActive ? " xb-nav__item--active" : "")}>{navLink(path === "/" || path === "" ? "#blogs" : "/events", "Blog", blogActive)}</li>
                                <li className={"xb-nav__item" + (contactActive ? " xb-nav__item--active" : "")}>{navLink("#contact", "Contact Us", contactActive)}</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-btn">
                        <a className="thm-btn" href="#contact">join now</a>
                    </div>
                    <div className="header-bar-mobile side-menu d-lg-none">
                        <a className="xb-nav-mobile" href="javascript:void(0);">
                            <i className="far fa-bars"></i>
                        </a>
                    </div>
                </div>
                <div className="xb-header-wrap">
                    <div className="xb-header-menu">
                        <div className="xb-header-menu-scroll">
                            <div className="xb-menu-close xb-hide-xl xb-close"></div>
                            <div className="xb-logo-mobile xb-hide-xl">
                                <a href="/" rel="home">
                                    <img src="/assets/img/logo/AXISystemslogofotter.svg" alt="AXI Systems" style={{ width: '180px', height: 'auto' }} />
                                </a>
                            </div>
                            <nav className="xb-header-nav">
                                <ul className="xb-nav xb-nav--mobile">
                                    <li className={mobileHomeLiClassResolved}>{navLink("/", "Home", homeActive)}</li>
                                    <li className={"xb-nav__item" + (aboutActive ? " xb-nav__item--active" : "")}>{navLink("#about", "About Us", aboutActive)}</li>
                                    <li className={"xb-nav__item" + (servicesActive ? " xb-nav__item--active" : "")}>{navLink("#tools", "Services", servicesActive)}</li>
                                    <li className={"xb-nav__item" + (blogActive ? " xb-nav__item--active" : "")}>{navLink(path === "/" || path === "" ? "#blogs" : "/events", "Blog", blogActive)}</li>
                                    <li className={"xb-nav__item" + (contactActive ? " xb-nav__item--active" : "")}>{navLink("#contact", "Contact Us", contactActive)}</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="xb-header-menu-backdrop"></div>
                </div>
            </div>
        </div>
    </header>
    
   
  );
}
