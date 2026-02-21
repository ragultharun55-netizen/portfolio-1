import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-5xl mx-auto text-center z-10">
        
        {/* Intro Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium"
        >
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
          Available for Innovation
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Ragul K</span>
        </motion.h1>

        {/* Role & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl font-light text-slate-300 mb-8"
        >
          AI Systems Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-slate-400 mb-10 leading-relaxed"
        >
          Building Intelligent AI Systems for Healthcare, Emergency Response & Security.
          I engineer robust LLM workflows and secure AI tools that solve real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-3.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-all flex items-center gap-2 overflow-hidden"
          >
             <span className="relative z-10">View Projects</span>
             <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="group px-8 py-3.5 rounded-full bg-slate-800/50 border border-slate-700 text-white font-medium hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <span>Contact Me</span>
            <Mail className="w-4 h-4 text-indigo-400" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
    </section>
  );
};

export default Hero;