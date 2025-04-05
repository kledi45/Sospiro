
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <h1 className="text-2xl font-bold font-playfair text-primary">SOSPIRO</h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#about" className="font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#chef" className="font-medium hover:text-primary transition-colors">
            Chef
          </a>
          <a href="#menu" className="font-medium hover:text-primary transition-colors">
            Menu
          </a>
          <a href="#gallery" className="font-medium hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="#reservations" className="font-medium hover:text-primary transition-colors">
            Reservations
          </a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors">
            Contact
          </a>
          <ThemeToggle />
          <a
            href="#reservations"
            className="btn-primary"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background dark:bg-card absolute top-full left-0 right-0 shadow-lg animate-slide-down">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#chef"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chef
            </a>
            <a
              href="#menu"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#gallery"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#reservations"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reservations
            </a>
            <a
              href="#contact"
              className="font-medium py-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#reservations"
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Table
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
