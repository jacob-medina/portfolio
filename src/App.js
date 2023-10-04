import './App.css';
import Header from './Header/Header';
import Project from './Project/Project';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Project 
          projectName="Rateit"
          description="A website where users can find and rate programming tools based on different characteristics."
          deployLink="https://rateit-e0014fad4ba9.herokuapp.com"
          repoLink="https://github.com/JimmyJr77/rateit"
          toolsUsed={['Handlebars', 'Sequelize', 'Express', 'Node', 'Bootsrap', 'JavaScript', 'CSS']}
        />
      </main>
    </>
  );
}

export default App;
