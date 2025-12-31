import React, { useEffect, useRef } from 'react';

type Skill = {
  name: string;
  percentage: number;
  className: string;
};

const SkillsSection: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const skillsElement = skillsRef.current;

    const handleScroll: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll<HTMLElement>('.skill-per');
          skillBars.forEach((bar) => {
            const percentage = bar.getAttribute('data-percentage');
            if (percentage) {
              bar.style.width = `${percentage}%`;
              bar.style.opacity = '1';
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.2 });
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => {
      if (skillsElement) {
        observer.unobserve(skillsElement);
      }
    };
  }, []);

  const skillsGroup1: Skill[] = [
{ name: 'HTML', percentage: 90, className: 'html' },
{ name: 'CSS', percentage: 85, className: 'css' },
{ name: 'JavaScript', percentage: 75, className: 'javascript' },
{ name: 'ReactJS', percentage: 78, className: 'reactjs' },
{ name: 'DSA', percentage: 85, className: 'dsa' },
{ name: 'OOP Concepts', percentage: 80, className: 'oop' },
{ name: 'DBMS', percentage: 75, className: 'dbms' },
{ name: 'Operating Systems', percentage: 65, className: 'os' },
{ name: 'Linux Commands', percentage: 60, className: 'linux' },

  ];

  const skillsGroup2: Skill[] = [
{ name: 'Java', percentage: 85, className: 'java' },
{ name: 'Spring Boot', percentage: 75, className: 'springboot' },
{ name: 'MySQL', percentage: 70, className: 'mysql' },
{ name: 'REST APIs', percentage: 75, className: 'restapi' },
{ name: 'Microservices (Basics)', percentage: 60, className: 'microservices' },
{ name: 'System Design (Basics)', percentage: 60, className: 'systemdesign' },
{ name: 'Git & GitHub', percentage: 85, className: 'git' },
{ name: 'AWS Basics (EC2/S3)', percentage: 55, className: 'aws' },
{ name: 'Maven/Gradle', percentage: 70, className: 'maven' },

  ];

  return (
    <section className="skillsMain" id="skillsMain" ref={skillsRef}>
      <h1 className="title-text">
        MY <span>SKILLS</span>
      </h1>
      <div className="container">
        <div className="skills-group mainLeft">
          {skillsGroup1.map((skill, index) => (
            <div className="skill-box" key={index}>
              <span className="title">{skill.name}</span>
              <div className="skill-bar">
                <span
                  className={`skill-per ${skill.className}`}
                  data-percentage={skill.percentage}
                  style={{
                    width: '0%',
                    animationDelay: `${0.1 * index}s`,
                  }}
                >
                  <span className="tooltip">{`${skill.percentage}%`}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-group mainRight">
          {skillsGroup2.map((skill, index) => (
            <div className="skill-box" key={index}>
              <span className="title">{skill.name}</span>
              <div className="skill-bar">
                <span
                  className={`skill-per ${skill.className}`}
                  data-percentage={skill.percentage}
                  style={{
                    width: '0%',
                    animationDelay: `${0.1 * index}s`,
                  }}
                >
                  <span className="tooltip">{`${skill.percentage}%`}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
