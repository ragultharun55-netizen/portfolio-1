import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800/50 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Ragul K. All rights reserved.</p>
          <p className="mt-1">Built with React, Tailwind & Framer Motion</p>
        </footer>
      </div>
    </div>
  );
}

export default App;