import { useState } from 'react'
import './style.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ProjectsPage from './pages/ProjectsPage';


function App() {
  const [tab, setTab] = useState("About");

  const changeTab = (tab) => {
    setTab(tab)
  }

  return (
    <>
      <NavBar onTabChange={changeTab}/>

      <div className="body-div">
        {tab === "About" && (
          <AboutPage/>
        )}
        {tab === "Experiences" && (
          <ExperiencesPage/>
        )}
        {tab === "Projects" && (
          <ProjectsPage/>
        )}
      </div>

      <Footer/>

    </>
  )
}

export default App
