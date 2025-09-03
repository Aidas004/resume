import { forwardRef } from 'react'
import { portfolioData } from '../../data/portfolioData'

const AboutSection = forwardRef((props, ref) => {
  const { about } = portfolioData

  return (
    <section ref={ref} id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="section-card bg-gray-900/20 border border-cyan-500/20 p-16 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-number text-[8rem] font-black text-cyan-400/20 leading-none mb-4">
                {about.sectionNumber}
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                {about.title}
              </h2>
              <div className="h-1 w-24 bg-cyan-400 mb-8"></div>
            </div>
            <div>
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`leading-relaxed ${
                    index === 0
                      ? 'text-xl text-gray-300 mb-8'
                      : 'text-lg text-gray-400'
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default AboutSection