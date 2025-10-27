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
    { name: 'TypeScript', percentage: 60, className: 'typescript' },
  ];

  const skillsGroup2: Skill[] = [
    { name: 'ReactJS', percentage: 78, className: 'reactjs' },
    { name: 'Java', percentage: 85, className: 'java' },
    { name: 'MySQL', percentage: 70, className: 'mysql' },
    { name: 'GitHub', percentage: 70, className: 'github' },
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
