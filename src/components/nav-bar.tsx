import { useState, useEffect, useCallback } from "react";

const NAV_LINKS = [
  { id: "one", href: "#home", text: "Home" },
  { id: "two", href: "#about", text: "About" },
  { id: "three", href: "#experiences", text: "Experiences" },
  { id: "four", href: "#projects", text: "Projects" },
  { id: "five", href: "#awards", text: "Awards" },
  { id: "six", href: "#education", text: "Education" },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle keyboard navigation for mobile menu
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  // Handle scroll to specific section with smooth behavior
  const handleScrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const targetSection = document.getElementById(sectionId.substring(1));

      if (targetSection) {
        // Get height of navbar to offset scrolling position
        const navbarHeight = 64; // Assuming navbar is 64px tall, adjust if needed

        const targetPosition =
          window.pageYOffset +
          targetSection.getBoundingClientRect().top -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
        });

        // Update active section
        setActiveSection(sectionId.substring(1));

        // Close mobile menu if open
        if (isOpen) {
          setIsOpen(false);
        }
      }
    },
    [isOpen]
  );

  // Handle scroll to determine active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to add subtle background on scroll
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = NAV_LINKS.map((link) => link.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-screen z-50 transition-all duration-300 ${
        scrolled ? "bg-black/30 backdrop-blur-sm" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Desktop navigation */}
        <div className="mx-auto h-16 hidden md:flex justify-around items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`px-3 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black ${
                activeSection === link.href.substring(1)
                  ? "text-emerald-400 font-bold"
                  : "text-gray-300 hover:text-emerald-400"
              }`}
              aria-current={
                activeSection === link.href.substring(1) ? "page" : undefined
              }
              tabIndex={0}
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile navigation - simplified with one button */}
        <div className="mx-auto h-14 md:hidden flex justify-between items-center px-4">
          <a
            href="#home"
            className="text-xl font-bold"
            onClick={(e) => handleScrollTo(e, "#home")}
          >
            <span className="text-emerald-400">
              {"<"}TB{"/>"}
            </span>
          </a>

          {/* Single mobile menu button */}
          <button
            type="button"
            className="p-2 text-gray-300 z-100 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded-md"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-14 left-0 right-0 bg-black backdrop-blur-md shadow-lg ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`block px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black ${
                  activeSection === link.href.substring(1)
                    ? "bg-emerald-900/20 text-emerald-400 font-medium"
                    : "text-gray-300 hover:bg-emerald-900/20 hover:text-emerald-400"
                }`}
                aria-current={
                  activeSection === link.href.substring(1) ? "page" : undefined
                }
                tabIndex={0}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
