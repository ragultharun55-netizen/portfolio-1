import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  const email = "ragultharun55@gmail.com";
  const subject = "Portfolio Inquiry";
  const body = "Hello Ragul, I would like to connect with you regarding...";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-slate-900/0 to-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's Build Something Intelligent</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I'm currently available for freelance projects and collaboration opportunities in AI healthcare and security systems.
          </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-slate-900 border border-slate-800 inline-block w-full max-w-2xl shadow-2xl"
        >
            <div className="flex flex-col items-center gap-8">
                
                {/* Location Badge */}
                <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>Coimbatore, Tamil Nadu</span>
                </div>

                {/* Email Button */}
                <a 
                    href={mailtoLink}
                    className="group relative w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 rounded-2xl text-white font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-3 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Mail className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">Send Me an Email</span>
                </a>

                <div className="w-full h-px bg-slate-800"></div>

                {/* Socials */}
                <div className="flex flex-col sm:flex-row gap-6 items-center text-slate-300">
                    <span>Connect with me:</span>
                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-[#0077b5] hover:text-white transition-all duration-300 group"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                <div className="text-slate-500 text-sm mt-4">
                    ragultharun55@gmail.com
                </div>

            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;