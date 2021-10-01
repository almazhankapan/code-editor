import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import ScrollToTop from './utils/ScrollToTop'
import Modal from 'react-modal'
import CompilerPyCpp from './pages/CompilerPyCpp'
import EditorHtmlJS from './pages/EditorHtmlJS'

require('dotenv').config()

Modal.setAppElement('#root') //Necessary for settings modal

export const AuthContext = React.createContext()

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/compiler-py-cpp">
            <CompilerPyCpp />
          </Route>
          <Route path="/editor-html-css">
            <EditorHtmlJS />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
