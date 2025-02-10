import React from 'react';
import { ChevronRight, CircuitBoard, Sparkles } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Empowering Businesses with Digital Innovation
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge technology solutions that drive growth and innovation
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-300">
            <a href="#contact" className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all hover:shadow-[0_0_40px_8px_rgba(56,189,248,0.3)]">
              <span className="relative z-10 flex items-center">
                Get Started
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <button className="group px-8 py-3 border-2 border-blue-500/50 rounded-full text-white font-semibold hover:border-blue-400 transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>
      
      <CircuitBoard className="absolute bottom-8 left-8 w-24 h-24 text-blue-500/20 animate-pulse" />
      <Sparkles className="absolute top-8 right-8 w-24 h-24 text-purple-500/20 animate-pulse" />
    </div>
  );
}
