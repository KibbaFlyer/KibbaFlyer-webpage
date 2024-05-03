import appStyles from './App.module.css'
import Navbar from '../Navbar/Navbar.tsx'
import Intro from '../Intro/Intro.tsx'

function App() {

  return (
    <>
      <div className={appStyles.App}>
        <Navbar/>
        <Intro/>
      </div>
    </>
  )
}

export default App
