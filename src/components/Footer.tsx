
import { Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Missing Email",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and About */}
          <div>
            <h1 className="text-3xl font-bold font-playfair text-gold mb-4">SOSPIRO</h1>
            <p className="text-primary-foreground/80 mb-6">
              Experience the finest Italian cuisine in Kosovo, crafted with passion
              by our Michelin-starred chef.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#menu" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reservations" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Contact</h3>
            <address className="not-italic text-primary-foreground/80 space-y-2">
              <p>Marigona Residence,</p>
              <p>Four Points by Sheraton</p>
              <p>Prishtina City Hotel,</p>
              <p>No. 52, California Street, 10000, Kosovo</p>
              <p className="mt-4">
                <a href="tel:+38338400300" className="hover:text-gold transition-colors">
                  +383 38 400 300
                </a>
              </p>
              <p>
                <a href="mailto:sospiro@fourpointsprishtina.com" className="hover:text-gold transition-colors">
                  sospiro@fourpointsprishtina.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">
              Subscribe to our newsletter to receive updates on special events,
              seasonal menus, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-2 rounded-l-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground w-full focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gold hover:bg-gold/90 text-black font-medium px-4 py-2 rounded-r-md transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 mt-8 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Sospiro Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
