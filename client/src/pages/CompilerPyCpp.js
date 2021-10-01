import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './CompilerPyCpp.css'
import EditorA from './EditorA'

function CompilerPyCpp() {
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')
  const [language, setLanguage] = useState('C++')
  const [theme, setTheme] = useState('eclipse')
  const handleSubmit = async () => {
    const payload = {
      language,
      code,
    }
    try {
      const { data } = await axios.post(
        //'https://air-editor.herokuapp.com/run',
        'http://localhost:13000/run',
        payload,
      )
      setOutput(data.output)
      console.log(data.output)
    } catch ({ response }) {
      if (response) {
        const errorMsg = response.data.err.stderr
        setOutput(errorMsg)
        console.log(response)
      } else {
        setOutput('Error connecting to server')
      }
    }
  }
  return (
    <>
      <Header />
      <div className="home-code">
        <h2 className="header-text-cpp">
          Write, compile and run your C++ and Python code!
        </h2>
        <div className="block-compiler">
          <br />
          <div id="lang">
            <label>Please choose your language: </label>
            <select
              className="dropdown"
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value)
                console.log(e.target.value)
                if (e.target.value == 'Python') {
                  setTheme('colorforth')
                } else {
                  setTheme('eclipse')
                }
              }}
            >
              <option value="C++">C++</option>
              <option value="Python">Python</option>
            </select>
          </div>
          <br />

          <EditorA
            language={language}
            displayName={language}
            value={code}
            theme={theme}
            onChange={setCode}
          />
          <br />
          <div className="btn-submit">
            <button onClick={handleSubmit}>Run</button>
          </div>
          <div className="pane">
            <br /> <br /> <br />
            <iframe
              className="pane-frame"
              srcDoc={output}
              title="output"
              color="white"
              sandbox="allow-scripts"
              frameBorder="1"
              width="70%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CompilerPyCpp
