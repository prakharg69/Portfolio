import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import Navbar from "../components/ui/navbar";

const words = ["SERVICES", "PRODUCTS", "SYSTEMS", "PROJECTS"];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="grid-bg h-screen flex items-center justify-center text-white relative overflow-hidden">

     
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-24 top-1/3 text-6xl text-gray-400"
      >
        <FaGithub />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-40 bottom-1/3 text-6xl text-yellow-400"
      >
        <SiJavascript />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-64 top-1/2 text-6xl text-green-500"
      >
        <SiMongodb />
      </motion.div>


     
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-24 top-1/3 text-6xl text-blue-400"
      >
        <FaReact />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute right-40 bottom-1/3 text-6xl text-green-600"
      >
        <FaNodeJs />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute right-64 top-1/2 text-6xl text-cyan-400"
      >
        <SiTailwindcss />
      </motion.div>


     
      <div className="text-center">

        <div className="flex items-center justify-center gap-6">

          <h1 className="array-font text-7xl md:text-8xl font-bold tracking-tight">
            CRAFTING DIGITAL
          </h1>

          <div className="w-125 flex justify-start">

            <AnimatePresence mode="wait">
              <motion.h1
                key={words[index]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="array-font text-7xl md:text-8xl font-extrabold text-blue-500 tracking-tight"
              >
                {words[index]}
              </motion.h1>
            </AnimatePresence>

          </div>

        </div>

        <h1 className="array-font text-7xl md:text-8xl font-bold tracking-tight mt-6">
          THAT STAND OUT
        </h1>

      </div>
      
    </section>
    <Navbar></Navbar>
    </>
    
  );
}

export default Home;