import appStyles from './App.module.css'
import Navbar from '../Navbar/Navbar.tsx'

function App() {

  return (
    <>
      <div className={appStyles.App}>
        <Navbar/>
      </div>
    </>
  )
}

export default App
