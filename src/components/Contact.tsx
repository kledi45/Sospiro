
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Form submission would normally go here
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-muted"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-primary mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Reach out to
            us using the information below.
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-sm mb-6 text-primary">Where to Find Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Marigona Residence,</p>
                    <p>Four Points by Sheraton</p>
                    <p>Prishtina City Hotel,</p>
                    <p>No. 52, California Street, 10000, Kosovo</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="mailto:sospiro@fourpointsprishtina.com" className="hover:text-primary transition-colors">
                    sospiro@fourpointsprishtina.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <a href="tel:+38338400300" className="block hover:text-primary transition-colors">
                      +383 38 400 300
                    </a>
                    <a href="tel:+38349764082" className="block hover:text-primary transition-colors">
                      +383 49 764 082
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p>Breakfast: 6:30 AM – 11:00 AM</p>
                    <p>Lunch & Dinner: 12:00 PM – 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="heading-sm mb-4 text-primary">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary hover:text-white rounded-full transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary hover:text-white rounded-full transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary hover:text-white rounded-full transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-80 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.2920852553966!2d21.15753011544928!3d42.66072677916808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee6202df38d%3A0x5b5f9a46c2732dd8!2sMarigona%20Residence!5e0!3m2!1sen!2s!4v1617193442167!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-md border border-border">
            <h3 className="heading-sm mb-6 text-primary">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-foreground mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
