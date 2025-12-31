import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faBriefcase,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

interface NavLink {
    id: string;
    icon: any;
}

const HomeSection: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>("homeMain");

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

    return (
        <section className="homeMain" id="homeMain">
            <div className="homeMain-left">
                <div className="homeMainLeft-content">
                    <h3>Hello</h3>
                    <h1>I'm &lt; <span>Balaji</span> /&gt;</h1>
                    <h3>
                        And I'm a <span>Software Development Engineer</span>
                    </h3>
                    <div className="homeMain-socialMedia">
                        <a
                            href="http://linkedin.com/in/balaji-nakka-5755472a3"
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
                    </div>
                    <a
                        href="https://raw.githubusercontent.com/balaji7671/portfolio/main/Balaji_Nakka_Resume.pdf"
                        className="btn"
                        download
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <div className="homeMain-right">
                    <ul className="homeMain-navbarLinks">
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={activeLink === link.id ? "active" : ""}
                            >
                                <a
                                    href={`#${link.id}`}
                                    onClick={(event) => handleLinkClick(event, link.id)}
                                >
                                    <FontAwesomeIcon
                                        icon={link.icon}
                                        className="nav-icon"
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
        </section>
    );
};

export default HomeSection;
