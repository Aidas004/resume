const Loader = () => {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      <div className="absolute w-full h-full border-4 border-cyan-500/20 rounded-full animate-spin" style={{ animationDuration: '8s' }}>
        <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-2"></div>
      </div>
      
      <div className="absolute w-64 h-64 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1.5"></div>
      </div>
      
      <div className="absolute w-48 h-48 border border-blue-500/40 rounded-full animate-spin" style={{ animationDuration: '4s' }}>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
      </div>
      
      <div className="relative bg-gray-900/80 border border-cyan-500/30 backdrop-blur-md rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">⚡</span>
        </div>
        <div className="text-lg font-bold text-white mb-2">Frontend</div>
        <div className="text-sm text-cyan-400">Developer</div>
        <div className="mt-4 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-20 right-16 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-16 left-20 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
    </div>
  )
}

export default Loader
