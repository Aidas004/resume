import { forwardRef } from 'react'
import { portfolioData } from '../../data/portfolioData'

const SkillsSection = forwardRef((props, ref) => {
  const { skills } = portfolioData

  return (
    <section ref={ref} id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="section-number text-[8rem] font-black text-cyan-400/20 leading-none mb-4">
            {skills.sectionNumber}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            {skills.title}
          </h2>
          <div className="h-1 w-24 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skills.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-bold">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 overflow-hidden rounded-full">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default SkillsSection