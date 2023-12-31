import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>
          Oops! Page Not Found.
        </h1>
        <Link to='/' className='btn'>Go Back</Link>
      </div>
      
    </section> 
  )
}

export default Error
