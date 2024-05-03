import appStyles from './App.module.css'
import Navbar from '../Navbar/Navbar.tsx'
import Intro from '../Intro/Intro.tsx'
import About from '../About/About.tsx'
import Education from '../Education/Education.tsx'
import Experience from '../Experience/Experience.tsx'
import Projects from '../Projects/Projects.tsx'
import Contact from '../Contact/Contact.tsx'

function App() {

  return (
    <>
      <div className={appStyles.App}>
        <Navbar/>
        <Intro/>
        <About/>
        <Education/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
