import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Hi Enter ur thourts here')
  const [textColor, setColor] = useState({ color: "red" })
  const touper = () => {
    setText(text.toUpperCase())
  }
  const handelonchange = (e) => {
    // console.log(text.split(" "))
    setText(e.target.value)
  }

  const colorchange = () => {
    console.log("co")
    let newColor = textColor === 'red' ? 'black' : 'red';
    setColor(newColor)
  }

  return (
    <div className="container body-dark">
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-8">
          <textarea className="form-control" value={text} style={{ color: textColor }} onChange={handelonchange} id="mybox" rows="4" colomn="2"></textarea>
        </div>
        <button className='btn btn-primary my-2' onClick={touper}>ToUpercase</button>
        <button className='btn btn-primary mx-2' onClick={colorchange}>color</button>
      </div>
      <div className="container">
        <h1> Text detail</h1>
        <p> {text.split(" ").length - 1} word and {text.length} character</p>
      </div>
    </div>
  
  )
}
