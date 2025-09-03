import { forwardRef } from 'react'
import { portfolioData } from '../../data/portfolioData'

const ExperienceSection = forwardRef((props, ref) => {
  const { experience } = portfolioData

  return (
    <section ref={ref} id="experience" className="py-32 px-6 bg-gray-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-number text-[8rem] font-black text-cyan-400/20 leading-none mb-4">
            {experience.sectionNumber}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            {experience.title}
          </h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-600">
            <div className="timeline-line absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 to-purple-500"></div>
          </div>

          <div className="space-y-16">
            {experience.timeline.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8">
                <div className="timeline-dot w-6 h-6 bg-cyan-400 rounded-full relative z-10 mt-2 flex items-center justify-center border-4 border-black">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="timeline-content flex-1">
                  <div className="experience-card relative bg-gray-900/50 border border-cyan-500/20 p-8 backdrop-blur-sm overflow-hidden transform-gpu">
                    <div className="card-glow absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0"></div>

                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full opacity-30"></div>
                    <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-50"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-40"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="contact-icon text-2xl">{exp.icon}</div>
                          <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        </div>
                        <span className="year-badge text-cyan-400 font-bold bg-cyan-400/20 px-4 py-2 rounded-full border border-cyan-400/30">
                          {exp.year}
                        </span>
                      </div>
                      <h4 className="text-xl text-cyan-400 mb-4 font-semibold">{exp.company}</h4>
                      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default ExperienceSection