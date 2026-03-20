import React, { useContext } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navContext } from "../../context/navContext";

function Navbar() {
  const { active, setActive } = useContext(navContext);
  const navigate = useNavigate();

  const items = [
    { id: "home", icon: Home, url: "/" },
    { id: "about", icon: User, url: "/about" },
    { id: "work", icon: Briefcase, url: "/work" },
    { id: "contact", icon: Mail, url: "/contact" }
  ];

  const redirectto = (url, id) => {
    navigate(url);
    setActive(id);
  };

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2
      backdrop-blur-lg bg-white/10 border border-white/20
      px-6 py-3 rounded-full flex gap-6 text-white shadow-xl"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;

        return (
          <button
            key={item.id}
            onClick={() => redirectto(item.url, item.id)}
            className="group flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <Icon
              size={26}
              className={`transition-all duration-300
                ${
                  isActive
                    ? "text-blue-400 -translate-y-1 drop-shadow-[0_0_12px_rgba(59,130,246,0.9)]"
                    : "text-gray-300 group-hover:text-white group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
                }
              `}
            />
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;