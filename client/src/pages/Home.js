import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import diagram from '../images/logo-large.png'
import { Link } from 'react-router-dom'
import pycppImg from '../images/python-cpp.png'
import htmlImg from '../images/html-js-css.jpeg'

import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="block">
          <img src={diagram} alt="diagram gif" className="gif-img" />
          <p className="full-text">
            <br />
            <br />
            <h4 className="gif-text">About Air </h4>
            <a className="home-link" href="https://hello-air.com/">
              Air
            </a>{' '}
            is founded in 2015 and operates in Asia to deliver projects of
            films, digital, games, experiential, VR/AR and theme park innovation
            globally. <br />
            <br />
            AIR continually work collaboratively to create content, advertising,
            utility and gaming. <br />
            <br />
            Work by Air has appeared in China, Dubai, France, Hong Kong, Japan,
            Korea, Singapore, Taiwan and Thailand.
            <br />
            <br />
          </p>
          <br />
        </div>
        <br /> <br />
        <div className="block">
          <p className="full-text">
            <h4 className="gif-text">Code Editor and Code Compiler </h4>
            This web application provides an introduction to two interfaces
            created for AIR:
            <br />
            <br />
            <a className="home-link" href="/editor-html-css">
              Code Editor
            </a>{' '}
            that allows to write, and render HTML, Javascript, CSS script.
            <br />
            <br />
            <a className="home-link" href="/compiler-py-cpp">
              Code Compiler and Editor
            </a>{' '}
            that allows to write, compile and run Python, C++ scripts<br></br>
          </p>
          <br />
          <div>
            <div className="wrap-img1">
              <Link to="/editor-html-css">
                <p className="home-link-2">HTML, JS, CSS Editor</p>
                <img className="menu-img" src={htmlImg} alt="diagram gif" />
              </Link>
            </div>
            <div className="wrap-img1">
              <Link to="/compiler-py-cpp">
                <p className="home-link-2">Python, C++ Compiler</p>
                <img className="menu-img" src={pycppImg} alt="diagram gif" />
              </Link>
            </div>
          </div>
          <div className="clear"></div>
          <br /> <br />
        </div>
        <br /> <br />
        <div className="block">
          <p className="full-text">
            <h4 className="gif-text">Documentation</h4> The app was developed
            with{' '}
            <a className="home-link" href="https://reactjs.org/">
              ReactJS
            </a>{' '}
            and{' '}
            <a className="home-link" href="https://expressjs.com/">
              ExpressJS
            </a>{' '}
            for Air Concepts by Alma Kapan .
            <br />
            <br />
            <a
              className="home-link"
              href="https://codemirror.net/demo/theme.html#blackboard"
            >
              Codemirror
            </a>{' '}
            library was used for styling the editors. <br />
            <br />
            You can view source code{' '}
            <a
              className="home-link"
              href="https://github.com/almazhankapan/code-editor"
            >
              here
            </a>
            .
            <br />
          </p>
          <br />
        </div>
        <br /> <br />
        <br />
      </div>
      <Footer />
    </>
  )
}

export default Home
