import React, { useState, useEffect, useMemo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface NavLink {
  id: string;
}

const ContactSection: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("homeMain");
  const contactRef = useRef<HTMLDivElement>(null);

  const navLinks: NavLink[] = useMemo(
    () => [
      { id: "homeMain", icon: faHome },
      { id: "aboutMain", icon: faUser },
      { id: "skillsMain", icon: faBriefcase },
      { id: "contactMain", icon: faEnvelope },
    ],
    []
  );

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
    setActiveLink(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );
      sections.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveLink(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contactRef.current) {
              contactRef.current
                .querySelector(".contactMain-left")
                ?.classList.add("slide-in-left");
              contactRef.current
                .querySelector(".contactInfo-contactForm")
                ?.classList.add("slide-in-right");
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="contactMain" id="contactMain" ref={contactRef}>
      <div className="contactMain-left">
        <div className="homeMainLeft-content contactMainLeft-content">
          <h1>Let's get in touch</h1>
          <p>
            Have questions, project ideas, or just want to connect? Reach out
            through this contact form, and I'll respond promptly. Whether it's
            a collaboration, feedback, or general inquiry, I look forward to
            hearing from you and working together!
          </p>
          <div className="homeMain-socialMedia">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/balaji7671/Project-Clone"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="contactInfo-contactForm">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="410b1009-2337-44bd-b38e-bbf9bf83b9e8"
          />

          <h2>Contact Me</h2>

          <div className="inputBox">
            <input type="text" name="fullName" required />
            <span>Full Name</span>
          </div>

          <div className="inputBox">
            <input type="email" name="email" required />
            <span>Email</span>
          </div>

          <div className="inputBox">
            <textarea name="message" required></textarea>
            <span>Type your Message...</span>
          </div>

          <div className="inputBox">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
