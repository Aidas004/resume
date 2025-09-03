import { forwardRef } from 'react'
import { portfolioData } from '../../data/portfolioData'

const ContactSection = forwardRef((props, ref) => {
  const { contact } = portfolioData

  return (
    <section ref={ref} id="contact" className="py-32 px-6 bg-gray-900/10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="section-number text-[8rem] font-black text-cyan-400/20 leading-none mb-4">
          {contact.sectionNumber}
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
          {contact.title}
        </h2>
        <div className="h-1 w-24 bg-cyan-400 mx-auto mb-16"></div>

        <div className="max-w-2xl mx-auto">
          <p className="contact-card text-xl text-gray-400 mb-12 leading-relaxed">
            {contact.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contact.contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card bg-gray-900/50 border border-cyan-500/20  py-8 backdrop-blur-sm transform-gpu hover:bg-gray-800/50 transition-colors duration-300 block text-center"
              >
                <div className="contact-icon text-3xl mb-4">{info.icon}</div>
                <h3 className="text-cyan-400 font-bold mb-2">{info.title}</h3>
                <p className="text-white">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default ContactSection