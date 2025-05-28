import React from 'react'
import petcare from '../../assets/pet.mp4'

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Full-page Video Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={petcare} type="video/mp4" />
        </video>
        {/* Video Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-indigo-900/70 to-pink-900/80" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Brand Name */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center 
                            border border-white/30 shadow-lg transform-gpu transition-all duration-300
                            group-hover:scale-110 group-hover:rotate-6">
                <span className="text-2xl animate-bounce">🐾</span>
              </div>
              <div className="absolute -inset-1 bg-white/20 rounded-xl blur-sm group-hover:blur-md transition-all"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200 
                           animate-shimmer relative">
                MyPet
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
              </h1>
              <p className="text-xs text-white/70 tracking-wider font-medium">CARE & LOVE</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Bubbles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Large Bubble Group 1 */}
        <div className="absolute -left-4 top-0 animate-float-bubble delay-300">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white/40 to-white/5 
                          backdrop-blur-sm border border-white/30 shadow-lg transform-gpu 
                          rotate-45 transition-transform duration-1000
                          before:content-[''] before:absolute before:inset-0 before:rounded-full 
                          before:bg-gradient-to-br before:from-white/40 before:to-transparent 
                          before:blur-sm before:opacity-75
                          after:content-[''] after:absolute after:w-1/2 after:h-1/2 
                          after:rounded-full after:bg-white/30 after:top-4 after:left-4 
                          after:blur-sm group-hover:scale-110">
              <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm"></div>
              <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-white/40 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Medium Bubble Group */}
        <div className="absolute left-1/4 top-1/3 animate-float-bubble-reverse delay-1000">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/30 to-white/5 
                          backdrop-blur-sm border border-white/30 shadow-lg transform-gpu 
                          rotate-12 transition-transform duration-1000
                          before:content-[''] before:absolute before:inset-0 before:rounded-full 
                          before:bg-gradient-to-br before:from-white/30 before:to-transparent 
                          before:blur-sm before:opacity-75
                          after:content-[''] after:absolute after:w-1/2 after:h-1/2 
                          after:rounded-full after:bg-white/20 after:top-3 after:left-3 
                          after:blur-sm group-hover:scale-110">
              <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm"></div>
              <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-white/40 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Small Bubble Group */}
        <div className="absolute right-1/3 top-1/4 animate-float-bubble delay-2000">
          <div className="relative group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 
                          backdrop-blur-sm border border-white/30 shadow-lg transform-gpu 
                          -rotate-12 transition-transform duration-1000
                          before:content-[''] before:absolute before:inset-0 before:rounded-full 
                          before:bg-gradient-to-br before:from-white/20 before:to-transparent 
                          before:blur-sm before:opacity-75
                          after:content-[''] after:absolute after:w-1/2 after:h-1/2 
                          after:rounded-full after:bg-white/10 after:top-2 after:left-2 
                          after:blur-sm group-hover:scale-110">
              <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm"></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 rounded-full bg-white/40 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Extra Large Bubble */}
        <div className="absolute right-1/4 bottom-1/4 animate-float-bubble-slow delay-4000">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-white/30 to-white/5 
                          backdrop-blur-sm border border-white/30 shadow-lg transform-gpu 
                          rotate-90 transition-transform duration-1000
                          before:content-[''] before:absolute before:inset-0 before:rounded-full 
                          before:bg-gradient-to-br before:from-white/30 before:to-transparent 
                          before:blur-sm before:opacity-75
                          after:content-[''] after:absolute after:w-1/2 after:h-1/2 
                          after:rounded-full after:bg-white/20 after:top-5 after:left-5 
                          after:blur-sm group-hover:scale-110">
              <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm"></div>
              <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-white/40 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Hearts */}
        <div className="absolute left-1/3 top-1/4 animate-float-heart delay-700">
          <div className="text-pink-500/30 text-4xl">❤️</div>
        </div>
        <div className="absolute right-1/4 top-1/3 animate-float-heart delay-1500">
          <div className="text-pink-500/30 text-3xl">❤️</div>
        </div>
        <div className="absolute left-1/4 bottom-1/3 animate-float-heart delay-3000">
          <div className="text-pink-500/30 text-5xl">❤️</div>
        </div>
        <div className="absolute right-1/3 bottom-1/4 animate-float-heart delay-2500">
          <div className="text-pink-500/30 text-4xl">❤️</div>
        </div>

        {/* Paw Prints */}
        <div className="absolute left-10 top-1/2 animate-float-paw delay-1200">
          <div className="text-white/20 text-3xl">🐾</div>
        </div>
        <div className="absolute right-10 bottom-1/3 animate-float-paw delay-2200">
          <div className="text-white/20 text-4xl">🐾</div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-20">
        {/* Hero Content */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-7xl mx-auto w-full py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center md:text-left space-y-8">
                <h1 className="text-6xl lg:text-7xl font-bold text-white animate-fade-in">
                  Loving Care
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-shimmer">
                    For Your Pets
                  </span>
                </h1>
                
                <p className="text-lg text-gray-200 max-w-xl mx-auto md:mx-0 animate-slide-up">
                  Professional pet care services tailored to your furry friend's needs.
                  Experience the best in comfort and care.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-slide-up delay-200">
                  <button className="px-8 py-4 bg-white/90 rounded-full text-purple-900 font-bold hover:bg-white transform hover:-translate-y-1 transition-all hover:shadow-xl hover:shadow-white/20 group">
                    Book Now
                    <span className="inline-block group-hover:animate-bounce ml-2">🐾</span>
                  </button>
                  <button className="px-8 py-4 rounded-full text-white border-2 border-white/50 hover:bg-white/20 transform hover:-translate-y-1 transition-all group">
                    Our Services
                    <span className="inline-block group-hover:animate-pulse ml-2">💝</span>
                  </button>
                </div>
              </div>

              {/* Right Content - Stats Cards */}
              <div className="grid grid-cols-2 gap-4 animate-fade-in delay-300">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏆</div>
                  <h3 className="text-3xl font-bold text-white mb-2">5000+</h3>
                  <p className="text-gray-300">Happy Pets</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💝</div>
                  <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                  <h3 className="text-3xl font-bold text-white mb-2">4.9</h3>
                  <p className="text-gray-300">Rating</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🏠</div>
                  <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
                  <p className="text-gray-300">Care Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home