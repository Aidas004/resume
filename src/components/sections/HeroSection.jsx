import { forwardRef } from 'react'
import Loader from '../ui/Loader'
import { portfolioData } from '../../data/portfolioData'

const HeroSection = forwardRef((props, ref) => {
  const { hero } = portfolioData

  return (
    <section ref={ref} id="hero" className="min-h-screen flex items-center justify-center px-6 relative pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="hero-number section-number text-[12rem] md:text-[20rem] font-black text-cyan-400/20 leading-none mb-4">
            {hero.sectionNumber}
          </div>
          <h1 className="hero-name text-6xl md:text-8xl font-black text-white mb-4 leading-tight">
            {hero.name.split(' ').map((name, index) => (
              <span key={index}>
                {name}
                {index === 0 && <br />}
              </span>
            ))}
          </h1>
          <h2 className="hero-role text-2xl md:text-4xl font-bold text-cyan-400 mb-8 tracking-wider">
            {hero.role}
          </h2>
          <p className="hero-subtitle text-xl text-gray-400 max-w-lg leading-relaxed mb-8">
            {hero.subtitle}
          </p>
          <div className="animated-line h-1 bg-gradient-to-r from-cyan-400 to-purple-500 origin-left"></div>
        </div>
        <div className="relative">
          <div className="grid-container flex items-center justify-center">
            <Loader />
          </div>
        </div>
      </div>
    </section>
  )
})

export default HeroSection