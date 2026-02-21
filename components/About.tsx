import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BrainCircuit, ShieldCheck, Activity } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg prose-invert text-slate-400 mb-8">
              <p className="leading-relaxed mb-6">
                I am a passionate <span className="text-indigo-400 font-semibold">AI Systems Developer</span> based in Coimbatore, Tamil Nadu. 
                My work focuses on bridging the gap between cutting-edge LLM capabilities and practical, high-stakes applications in healthcare and security.
              </p>
              <p className="leading-relaxed">
                I design workflow-driven AI products using modern LLM tools and AI-assisted development. Whether it's automating medical documentation or analyzing code for security vulnerabilities, I build systems that are reliable, efficient, and intelligent.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                <BrainCircuit className="w-8 h-8 text-indigo-400 mb-3" />
                <h3 className="font-semibold text-white">LLM Engineering</h3>
                <p className="text-sm text-slate-500 mt-1">Workflow Automation</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                <ShieldCheck className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="font-semibold text-white">AI Security</h3>
                <p className="text-sm text-slate-500 mt-1">Code & Data Audits</p>
              </div>
            </div>
          </motion.div>

          {/* Education & Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Education Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
              <div className="relative p-8 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">Education</span>
                    <h3 className="text-xl font-bold text-white mt-1">B.Tech – Artificial Intelligence & Data Science</h3>
                    <p className="text-slate-400 mt-2">SNS College of Technology</p>
                    <p className="text-slate-500 text-sm mt-1">2025 – 2029</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
             <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">Current Focus</span>
                    <h3 className="text-lg font-bold text-white mt-1">Healthcare AI Systems</h3>
                    <p className="text-slate-400 text-sm mt-2">
                      Developing AI assistants for rural healthcare diagnosis and emergency response optimization.
                    </p>
                  </div>
                </div>
              </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;