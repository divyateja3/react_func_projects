import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index,hex }) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexvalue = `#${hex}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout) 
  },[alert])
  return (
    <article className={`color ${index > 8 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }} 
    >
      <p className='color-value'>{hexvalue}</p>
      <p className='percent-value'>{weight}%</p>
      <button className = 'btncopy' onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexvalue)
      }}> copy here </button>
      {alert && <p className = 'alert'> ready to get pasted </p>}
    </article>
  )
}

export default SingleColor
