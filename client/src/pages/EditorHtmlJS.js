import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Editor from './Editor'
import './EditorHtmlJS.css'
function EditorHtmlJS() {
  const [html, setHtml] = useState('')
  const [js, setJs] = useState('')
  const [css, setCss] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
    <>
      <Header />
      <div className="home-code">
        <h2 className="header-text-cpp">
          Write and Render your HTML, Javascript, CSS code!
        </h2>
        <div className="pane top-pane">
          <br /> <br /> <br />
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
          <Editor language="js" displayName="JS" value={js} onChange={setJs} />
        </div>
        <div className="pane">
          <br /> <br /> <br />
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditorHtmlJS
