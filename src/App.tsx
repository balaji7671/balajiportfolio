import { useEffect } from 'react';
import './portfolioFile.css';
import NavBarMain from './portfolio/common/NavBarMain';
import AboutSection from './portfolio/components/AboutSection';
import ContactSection from './portfolio/components/ContactSection';
import HomeSection from './portfolio/components/HomeSecion';
import SkillsSection from './portfolio/components/SkillsSection';





function App() {

  useEffect(() =>{
    document.title ="Portfolio"
  })

  return (
    <div>
      <NavBarMain/>
      <HomeSection/>
      <AboutSection/>
      <SkillsSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
