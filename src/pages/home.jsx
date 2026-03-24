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
      <section className="grid-bg min-h-screen flex items-center justify-center text-white relative overflow-hidden px-4">

        {/* Floating Icons (optional: hide on small screens for cleanliness) */}
        <motion.div className="hidden md:block absolute left-24 top-1/3 text-6xl text-gray-400"
          animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <FaGithub />
        </motion.div>

        <motion.div className="hidden md:block absolute left-40 bottom-1/3 text-6xl text-yellow-400"
          animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <SiJavascript />
        </motion.div>

        <motion.div className="hidden md:block absolute left-64 top-1/2 text-6xl text-green-500"
          animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <SiMongodb />
        </motion.div>

        <motion.div className="hidden md:block absolute right-24 top-1/3 text-6xl text-blue-400"
          animate={{ y: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <FaReact />
        </motion.div>

        <motion.div className="hidden md:block absolute right-40 bottom-1/3 text-6xl text-green-600"
          animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <FaNodeJs />
        </motion.div>

        <motion.div className="hidden md:block absolute right-64 top-1/2 text-6xl text-cyan-400"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <SiTailwindcss />
        </motion.div>

        {/* Main Text */}
        <div className="text-center">

          {/* LINE 1 (NO BREAK) */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-2 md:gap-4 whitespace-nowrap">

            <h1 className="array-font text-2xl sm:text-5xl md:text-7xl lg:text-[65px] font-bold tracking-tight">
              CRAFTING DIGITAL
            </h1>

            <AnimatePresence mode="wait">
              <motion.h1
                key={words[index]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="array-font text-2xl sm:text-5xl md:text-7xl lg:text-[65px] font-extrabold text-blue-500 tracking-tight"
              >
                {words[index]}
              </motion.h1>
            </AnimatePresence>

          </div>

          {/* LINE 2 */}
          <h1 className="array-font text-3xl sm:text-5xl md:text-7xl lg:text-[70px] font-bold tracking-tight mt-4 md:mt-6">
            THAT STAND OUT
          </h1>

        </div>

      </section>

      <Navbar />
    </>
  );
}

export default Home;