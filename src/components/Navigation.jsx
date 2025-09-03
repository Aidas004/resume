const Navigation = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: '#hero', label: 'HOME', section: 'hero' },
    { id: '#about', label: 'ABOUT', section: 'about' },
    { id: '#skills', label: 'SKILLS', section: 'skills' },
    { id: '#experience', label: 'EXPERIENCE', section: 'experience' },
    { id: '#contact', label: 'CONTACT', section: 'contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-black text-cyan-400">AB</div>
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, section }) => (
              <button
                key={section}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-bold tracking-wider transition-all duration-300 ${activeSection === section
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-white'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation