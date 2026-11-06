import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skill" },
    { name: "My Journey", href: "#journey" },
    { name: "Contact", href: "#contact" },
  ];

  // Active section detect karna
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let currentSection = "#home";

      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
          currentSection = `#${section.id}`;
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu close + smooth scroll
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveLink(href);
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-2xl font-bold text-white"
        >
          Our Portfolio<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition duration-300 ${
                  activeLink === link.href
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-blue-500"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-900 overflow-hidden transition-all duration-500 ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-3">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block py-3 transition duration-300 ${
                  activeLink === link.href
                    ? "text-blue-500 bg-gray-800"
                    : "text-gray-300 hover:text-blue-500 hover:bg-gray-800"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;