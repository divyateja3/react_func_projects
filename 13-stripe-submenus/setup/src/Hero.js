import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const data = useGlobalContext()
  const {closeSubmenu} = useGlobalContext()
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Internet payment infrastructure</h1>
          <p>
            Stripe is the go-to payments platform for
            businesses of all sizes that want to accept
            payments, send payouts, and manage their businesses online.
          </p>
          <button className='btn'>
            Get Started
          </button>
        </article>
        <article className='hero-images'>
          <img src = {phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero
