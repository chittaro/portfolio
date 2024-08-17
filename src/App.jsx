import { useState } from 'react'
import './style.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [tab, setTab] = useState("About");

  const changeTab = (tab) => {
    setTab(tab)
  }

  return (
    <>
      <NavBar />

      <div className="body-div">
        <p>helllo</p>
      </div>

      <Footer/>

    </>
  )
}

export default App
