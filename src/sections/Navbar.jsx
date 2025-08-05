import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navigation({ onLinkClick }) {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#project", label: "Project" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <ul className="space-y-2 sm:space-y-0 sm:flex sm:space-x-6 text-neutral-400">
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} onClick={onLinkClick} className="hover:text-white">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        // Always show navbar near top
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = () => setIsOpen(false);

  // Navbar is visible if scrolling up OR if hovering on navbar
  const navbarVisible = showNavbar || isHovering;

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`fixed inset-x-0 top-0 z-50 w-full h-16 backdrop-blur bg-black/50 transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16">
        <a href="#home" className="text-xl font-bold text-white">
          shivam
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white"
        >
          <img
            src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="menu"
            className="w-6 h-6"
          />
        </button>
        <nav className="hidden sm:block">
          <Navigation onLinkClick={handleLinkClick} />
        </nav>
      </div>

      {isOpen && (
        <motion.div
          className="sm:hidden bg-black/80 text-center py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Navigation onLinkClick={handleLinkClick} />
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;