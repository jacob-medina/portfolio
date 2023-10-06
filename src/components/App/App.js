import './reset.css';
import './helpers.css';
import './App.css';
import Header from '../Header/Header';
import ProjectsSection from '../Sections/ProjectsSection/ProjectsSection';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
