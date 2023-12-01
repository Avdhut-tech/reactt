import React from 'react'

export default function Copy() {
  return (
    <div className="fle">
    <label className="red">
      <input type="checkbox" />
      <span className="color-r"></span> 
  </label> 
  
  <label className="green">
      <input type="checkbox" checked="checked" /> 
      <span className="color-g"></span> 
  </label> 
  
  <label className="blue">
      <input type="checkbox" /> 
      <span className="color-b"></span> 
  </label> 
  </div>
  )
}
