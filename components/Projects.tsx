import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Ambient Scribe (Lite)",
    category: "Healthcare",
    description: "AI-powered medical documentation assistant that listens to doctor-patient conversations.",
    longDescription: "Ambient Scribe (Lite) revolutionizes clinical workflows by automatically transcribing and structuring doctor-patient consultations into SOAP notes. It utilizes advanced Speech-to-Text and LLMs to ensure accuracy, privacy, and speed, significantly reducing administrative burnout for physicians.",
    techStack: ["React", "Python", "Whisper API", "LLM Integration"]
  },
  {
    id: 2,
    title: "Emergency Medical Assistant",
    category: "Emergency Response",
    description: "Voice-activated AI system designed to assist first responders in critical situations.",
    longDescription: "A hands-free, voice-first AI interface built for paramedics and emergency responders. It provides instant treatment protocols, drug dosage calculations, and hospital communication relay during high-stress scenarios where manual data entry is impossible.",
    techStack: ["FastAPI", "Voice AI", "Twilio", "Real-time DB"]
  },
  {
    id: 3,
    title: "AI Diagnosis",
    category: "Healthcare",
    description: "Diagnostic support tool tailored for rural healthcare centers with limited resources.",
    longDescription: "Bridging the gap in rural healthcare, this AI system analyzes symptoms and basic vitals to suggest potential diagnoses and triage recommendations. It is optimized for low-bandwidth environments and supports local languages to assist healthcare workers in remote villages.",
    techStack: ["Machine Learning", "TensorFlow", "React", "Offline-First"]
  },
  {
    id: 4,
    title: "AI Audit",
    category: "Security",
    description: "Automated code security analyzer that detects vulnerabilities in real-time.",
    longDescription: "AI Audit integrates into CI/CD pipelines to scan codebases for security vulnerabilities, logic errors, and anti-patterns. Using a fine-tuned model trained on security datasets, it suggests specific patches and remediation steps before deployment.",
    techStack: ["Python", "LLM", "GitHub Actions", "Static Analysis"]
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-purple-500 rounded-full"></div>
          </div>
          <div className="hidden md:block text-slate-500 text-sm">
            Building the future of intelligent systems
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-colors duration-300"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-3 py-1 rounded-full bg-slate-800 text-xs font-medium text-slate-400 border border-slate-700">
                    {project.category}
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 text-sm border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-slate-800">
                  <button className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors flex items-center justify-center gap-2">
                    View Demo <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;