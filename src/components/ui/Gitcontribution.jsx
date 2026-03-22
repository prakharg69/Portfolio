import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// --- GITHUB CONTRIBUTIONS COMPONENT ---
const GithubContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [colorIndex, setColorIndex] = useState(0);

  // Color palette (GitHub-style green shades)
  const colorPalette = [
    { level: 0, color: 'bg-gray-800', label: '0' },
    { level: 1, color: 'bg-green-900/60', label: '1-3' },
    { level: 2, color: 'bg-green-700', label: '4-6' },
    { level: 3, color: 'bg-green-500', label: '7-9' },
    { level: 4, color: 'bg-green-300', label: '10+' },
  ];

  // Generate 365 days of contributions
  const generateContributions = () => {
    const today = new Date();
    const days = [];
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      days.push({
        date,
        count: Math.floor(Math.random() * 15), // 0-10 contributions
      });
    }
    return days;
  };

  // Initialize contributions
  useEffect(() => {
    setContributions(generateContributions());
  }, []);

  // Animate colors every second
  useEffect(() => {
    const colorTimer = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % 5);
    }, 1000);

    // Randomize contributions every 500ms (Faster)
    // Changed to update 15-25 boxes per tick (More volume)
    const randomTimer = setInterval(() => {
      setContributions((prev) => {
        const updated = [...prev];
        const changesCount = Math.floor(Math.random() * 10) + 100; // 15 to 25 changes
        for (let i = 0; i < changesCount; i++) {
          const randomIdx = Math.floor(Math.random() * updated.length);
          updated[randomIdx] = {
            ...updated[randomIdx],
            count: Math.floor(Math.random() * 11),
          };
        }
        return updated;
      });
    }, 500); // Reduced from 2000ms to 500ms

    return () => {
      clearInterval(colorTimer);
      clearInterval(randomTimer);
    };
  }, []);

  // Get color based on contribution count
  const getColor = (count) => {
    if (count === 0) return colorPalette[0].color;
    if (count <= 3) return colorPalette[1].color;
    if (count <= 6) return colorPalette[2].color;
    if (count <= 9) return colorPalette[3].color;
    return colorPalette[4].color;
  };

  // Get month labels for top row
  const getMonthLabels = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const labels = [];
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - (i * 30));
      const month = months[date.getMonth()];
      if (!labels.includes(month)) {
        labels.push(month);
      }
    }
    return labels.slice(0, 8); // Show ~8 month labels
  };

  // Get day labels for left column
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Organize contributions into weeks (52 weeks × 7 days = 364, close to 365)
  const weeks = [];
  for (let i = 0; i < 52; i++) {
    weeks.push(contributions.slice(i * 7, (i + 1) * 7));
  }

  // Calculate total contributions
  const totalContributions = contributions.reduce((sum, day) => sum + day.count, 0);

  return (
    <div className="w-200 bg-gray-900/70 backdrop-blur-md border border-dotted border-gray-700 rounded-2xl p-4 hover:border-blue-500/50 transition-all">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[10px] font-mono text-white uppercase tracking-widest flex items-center gap-2">
          <FaGithub /> Contributions
        </h3>
        <span className="text-[9px] text-gray-500 font-mono">
          {totalContributions} total
        </span>
      </div>

      {/* Contribution Graph Container */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          
          {/* Month Labels (Top) */}
          <div className="flex mb-2 ml-6">
            {getMonthLabels().map((month, idx) => (
              <div 
                key={idx} 
                className="flex-1 text-[9px] text-gray-500 font-mono text-center"
                style={{ minWidth: '60px' }}
              >
                {month}
              </div>
            ))}
          </div>

          {/* Graph Grid */}
          <div className="flex gap-0.5">
            
            {/* Day Labels (Left) */}
            <div className="flex flex-col gap-0.5 justify-around py-1">
              {dayLabels.map((day, idx) => (
                <div 
                  key={idx} 
                  className="text-[8px] text-gray-500 font-mono w-6 text-right pr-1"
                >
                  {idx % 2 === 0 ? day : ''}
                </div>
              ))}
            </div>

            {/* Contribution Boxes */}
            <div className="flex gap-0.5">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-0.5">
                  {week.map((day, dayIdx) => (
                    <motion.div
                      key={`${weekIdx}-${dayIdx}`}
                      className={`w-3 h-3 rounded-0.5 ${getColor(day.count)} cursor-pointer hover:scale-125 hover:z-10 transition-all`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        backgroundColor: day.count > 0 ? undefined : undefined
                      }}
                      transition={{ 
                        delay: (weekIdx * 7 + dayIdx) * 0.001,
                        duration: 0.15 // Faster transition to match rapid updates
                      }}
                      whileHover={{ scale: 1.5 }}
                      title={`${day.count} contributions on ${day.date.toLocaleDateString()}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Color Palette Legend (Bottom) */}
          <div className="flex items-center justify-end gap-2 mt-4 pt-3 border-t border-gray-800">
            <span className="text-[8px] text-gray-500 font-mono">Less</span>
            {colorPalette.map((level, idx) => (
              <motion.div
                key={idx}
                className={`w-3 h-3 rounded-[2px] ${level.color}`}
                animate={{
                  scale: colorIndex === idx ? 1.2 : 1,
                  opacity: colorIndex === idx ? 1 : 0.7
                }}
                transition={{ duration: 0.3 }}
                title={`${level.label} contributions`}
              />
            ))}
            <span className="text-[8px] text-gray-500 font-mono">More</span>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;