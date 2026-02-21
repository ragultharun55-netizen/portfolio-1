import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'AI & LLM Workflows', level: 95, category: 'core' },
  { name: 'Prompt Engineering', level: 90, category: 'core' },
  { name: 'Python', level: 95, category: 'core' },
  { name: 'FastAPI', level: 85, category: 'framework' },
  { name: 'React', level: 80, category: 'framework' },
  { name: 'JavaScript', level: 85, category: 'core' },
  { name: 'Firebase', level: 75, category: 'tool' },
  { name: 'Git & GitHub', level: 90, category: 'tool' },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <div className="w-20 h-1.5 bg-indigo-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-slate-400">Tools and technologies I use to build intelligent systems.</p>
        </motion.div>

        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <div key={skill.name} className="relative">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-slate-200">{skill.name}</span>
                <span className="text-slate-500 text-sm">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
                >
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/20 blur-[2px]"></div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;