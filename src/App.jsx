// import { useState } from 'react'
import React from "react"
import Home from "./pages/home"
import Search from "./pages/search"
import {Route, Routes} from "react-router-dom"
import SignIn from "./pages/signIn"
import SignUp from "./pages/signUp"

function App() {

  return (
    <div className="App container mx-auto min-h-screen relative overflow-hidden">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/camps" element={<Search/>} />
        <Route path="/camps/signIn" element={<SignIn/>} />
        <Route path="/camps/signUp" element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App
