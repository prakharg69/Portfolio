import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaReact, FaNodeJs, FaEnvelope, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiGmail } from 'react-icons/si';
import { navContext } from '../context/navContext';
import Navbar from '../components/ui/navbar';

function Contact() {
    const {setActive} = useContext(navContext);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(()=>{
      setActive("contact");
    },[]);

    const handleChange = (e) => {
      setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    };

    const contactLinks = [
      { icon: FaEnvelope, label: 'hello@yourdomain.com', href: 'mailto:hello@yourdomain.com', color: 'text-blue-400' },
      { icon: FaGithub, label: 'github.com/yourname', href: 'https://github.com/yourname', color: 'text-gray-300' },
      { icon: FaLinkedin, label: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname', color: 'text-blue-500' },
      { icon: FaTwitter, label: '@yourhandle', href: 'https://twitter.com/yourhandle', color: 'text-sky-400' },
    ];

    // Floating icons config (matching Home page theme)
    const floatingIcons = [
      { Icon: FaGithub, position: 'left-24 top-1/3', color: 'text-gray-400', duration: 5, offset: -15 },
      { Icon: SiJavascript, position: 'left-40 bottom-1/3', color: 'text-yellow-400', duration: 6, offset: 15 },
      { Icon: SiMongodb, position: 'left-64 top-1/2', color: 'text-green-500', duration: 5, offset: -12 },
      { Icon: FaReact, position: 'right-24 top-1/3', color: 'text-blue-400', duration: 6, offset: 15 },
      { Icon: FaNodeJs, position: 'right-40 bottom-1/3', color: 'text-green-600', duration: 5, offset: -12 },
      { Icon: SiTailwindcss, position: 'right-64 top-1/2', color: 'text-cyan-400', duration: 6, offset: 10 },
    ];

  return (
    <>
      <Navbar />
      <section className="grid-bg min-h-screen relative overflow-hidden flex items-center justify-center py-20">
        
        {/* ✨ Floating Tech Icons - Same as Home Page Theme */}
        {floatingIcons.map((item, idx) => (
          <motion.div
            key={idx}
            animate={{ y: [0, item.offset, 0] }}
            transition={{ duration: item.duration, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute text-6xl ${item.position} ${item.color} opacity-60 hover:opacity-100 transition-opacity cursor-default`}
          >
            <item.Icon />
          </motion.div>
        ))}

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
          
          {/* ✨ Heading with Blue Glow + array-font + Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 
              className="array-font text-4xl md:text-6xl font-bold text-white tracking-tight"
              style={{ 
                textShadow: '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.4)' 
              }}
            >
              LET'S CONNECT
            </h1>
            <p className="array-font text-gray-400 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
              Have a project in mind? Let's build something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* ✨ Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
            >
              <h2 className="array-font text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                {contactLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/40 hover:bg-gray-800/70 border border-gray-700 hover:border-blue-500/40 transition-all group"
                  >
                    <link.icon className={`text-2xl ${link.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>

            {/* ✨ Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all"
            >
              <h2 className="array-font text-2xl font-bold text-white mb-6">Send a Message</h2>
              
              <div className="space-y-5">
                {/* Name Input */}
                <div>
                  <label className="block text-gray-400 text-sm font-mono mb-2">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-gray-400 text-sm font-mono mb-2">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-gray-400 text-sm font-mono mb-2">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-gray-400 border-t-blue-400 rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-green-400 text-center font-mono text-sm py-2"
                    >
                      ✓ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>

          </div>

          {/* ✨ Decorative Bottom Glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
          />
          
        </div>
      </section>
    </>
  )
}

export default Contact;