import React, { useState } from 'react'

export default function Navbar() {

const [mode,setmode] = useState("white") 

  let redthem = ()=>{
    if ( mode === 'white') {
  setmode(document.body.style.backgroundColor = 'red')
    }
    else{
  setmode(document.body.style.backgroundColor = "white")
    }
  }
  let greenthem = ()=>{
    if ( mode === 'white') {
  setmode(document.body.style.backgroundColor = 'green')
    }
    else{
  setmode(document.body.style.backgroundColor = "white")
    }
  }
  let bluethem = ()=>{
    if ( mode === 'white') {
  setmode(document.body.style.backgroundColor = 'blue')
    }
    else{
  setmode(document.body.style.backgroundColor = "white")
    }
  }



  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" style ={{color :`${'white'? 'black' :'white'}`}} href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
          </div>
          <div className="fle">
            <label className="red">
              <input type="checkbox"  onClick={redthem}/>
              <span className="color-r"></span>
            </label>

            <label className="green">
              <input type="checkbox" onClick={greenthem} />
              <span className="color-g"></span>
            </label>

            <label className="blue">
              <input type="checkbox" onClick={bluethem} />
              <span className="color-b"></span>
            </label>
          </div>
        </div>
      </nav>
    </>
  )
}
