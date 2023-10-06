import './reset.css';
import './helpers.css';
import './App.css';
import Header from '../Header/Header';
import AboutSection from '../Sections/AboutSection/AboutSection';
import ProjectsSection from '../Sections/ProjectsSection/ProjectsSection';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
