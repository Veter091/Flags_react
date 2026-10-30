import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header.jsx'
import Controls from './Components/Controls/Controls.jsx'
import CountriesList from './Components/CountriesList/CountriesList.jsx'
import { COUNTRIES } from './Components/CountriesList/countries.js'

function App() {

  return (
    <>
      <Header />

      <main className="main-content">
        <Controls/>
        <CountriesList countries={COUNTRIES} />
      </main>
      
    </>
  )
}

export default App
