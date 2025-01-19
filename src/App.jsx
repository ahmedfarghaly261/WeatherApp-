import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Weather from './components/Weather_sec/weather'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      {/* <div className="block">
        <Header/>
    </div> */}
      <div className="">
        <Weather />
      </div>
      
<Footer/> 
  <center></center>   

  

    </>
  )
}

export default App
