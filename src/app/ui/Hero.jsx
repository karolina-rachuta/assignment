import React from 'react'
import Breadcrumbs from './Hero/Breadcrumbs'
import Frame from './Hero/Frame'
import Sticker from './Hero/Sticker'

function Hero() {
  return (
    <section className="hero-bg-image">
      <div className="du_container relative flex flex-col gap-10 p-2 lg:gap-10">
        <Breadcrumbs />
        <Frame />
        <Sticker />
      </div>
    </section>
  )
}

export default Hero
