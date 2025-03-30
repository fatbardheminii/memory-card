// import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import GameBoard from './components/GameBoard'

function App() {

  return (
    <>
      <Header></Header>
      <ScoreBoard></ScoreBoard>
      <GameBoard></GameBoard>
      <Footer></Footer>
    </>
  )
}

export default App
