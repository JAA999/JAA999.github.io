import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-toolbar">
        <p>Arteaga</p>
        <nav>
          <ul className='toolbar-links'>
            <li><a>Skills</a></li>
            <li><a>Projects</a></li>
            <li><a>Roadmap</a></li>
            <li><a>Contact Me</a></li>
          </ul>
        </nav>
      </div>
      <header className="App-header">
        <p className="header-intro"><p className='header-intro' id='intro-first'>Hello,</p> My Name Is Joseph Arteaga, And I Am a CS Major At UT Austin.</p>
        <img className='header-logo' src={logo}/>
      </header>
      <div className="App-skills">
        <h1 className='skills-title'>Skills</h1>
        <div className='skills-content'>
          <ul className='skills-list'>
            <li className='skills-list'>Python</li>
            <li className='skills-list'>React</li>
            <li className='skills-list'>HTML/CSS</li>
            <li className='skills-list'>JavaScript</li>
          </ul>
          <ul className='App-skills-experience'>
            <li>{updateDate(python, 2)} Years</li>
            <li>{updateDate(react, .5)} Years</li>
            <li>{updateDate(html, 1)} Year</li>
            <li>{updateDate(js, 1)} Year</li>
          </ul>
        </div>
      </div>
      <div className='App-projects'>
        <p className='App-projects-title'>Projects</p>
        <a className='App-to-projects'>&#x2192;</a>
      </div>
      <div className='App-roadmap'>
        <p className='App-roadmap-title'>Roadmap</p>
      </div>
      <div className='App-footer'>

      </div>
    </div>
  );
}

const today = new Date();
const dd = String(today.getDate()+1).padStart(2, '0');
const mm = String(today.getMonth()+1).padStart(2, '0');
const python = new Date(2020, 10, 12);
const js = new Date(2021, 7, 25);
const html = new Date(2021, 11, 15);
const react = new Date(2022, 7, 2);
function updateDate(skill, currentPeriod){
  if(dd === String(skill.getDate()+1).padStart(2, '0') && mm === String(skill.getMonth()).padStart(2, '0')){
    return currentPeriod += 1;
  }else{
    return currentPeriod;
  }
};


export default App;
