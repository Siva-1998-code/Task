import './App.css';
import Experience from './Template2/Experience';
import Grid from './Template2/Grid';
import HomeBio from './Template2/HomeBio';
import NavigationBar from './Template2/NavigationBar';
import Profile from './Template2/Profile';
import Projects from './Template2/Projects';
import ProjectsList from './Template2/ProjectsList';


function App() {
  return (
    <div >
      <NavigationBar />
      <HomeBio />
      <Experience />
      <Projects />
      <ProjectsList />
      <Profile />
      <Grid/>
    </div>
  );
}

export default App;
