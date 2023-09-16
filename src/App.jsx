import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calculator from './Components/Calculator/Calculator'
import './App.css'

function App() {

  return (
    <>
    <div className='flex justify-center items-center h-[100vh]'>
      <Calculator></Calculator>
    </div>
    </>
  )
}

export default App
