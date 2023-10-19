import './reset.css';
import './helpers.css';
import './App.css';

import Nav from '../Navigation/Navigation';
import Header from '../Header/Header';
import AboutSection from '../Sections/AboutSection/AboutSection';
import ProjectsSection from '../Sections/ProjectsSection/ProjectsSection';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [scrollProjectSection, setScrollProjectSection] = useState(false);
  const [scrollContactSection, setContactProjectSection] = useState(false);

  useEffect(() => {
    const projectObserver = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) setScrollProjectSection(true);
      else setScrollProjectSection(false);
    });
    
    projectObserver.observe(document.querySelector('#project'));
    
    const contactObserver = new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) setContactProjectSection(true);
      else setContactProjectSection(false);
    });
    
    contactObserver.observe(document.querySelector('#contact'));
  }, []);


  return (
    <div id="app">
      <Nav visibleSections={{project: scrollProjectSection, contact: scrollContactSection}} />
      <section className='top-background'>
        <Header/>
        <AboutSection />
      </section>
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
