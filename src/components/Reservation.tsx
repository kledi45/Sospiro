
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Reservation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Form submission would normally go here
    toast({
      title: "Reservation Received!",
      description: "We'll confirm your reservation shortly.",
    });

    // Reset form
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      requests: ""
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
      id="reservations"
      ref={sectionRef}
      className="relative section-padding text-white"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=3270&auto=format&fit=crop')",
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-gold mb-4">Reservations</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Reserve your table at Sospiro for an unforgettable Italian dining experience.
              For large parties or special occasions, please call us directly.
            </p>
          </div>

          <div 
            className={`bg-background/10 backdrop-blur-md p-8 rounded-lg border border-white/10 shadow-xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-white mb-2">
                    Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-white mb-2">
                    Time <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  >
                    <option value="" disabled className="bg-background text-foreground">
                      Select time
                    </option>
                    <option value="12:00" className="bg-background text-foreground">12:00 PM</option>
                    <option value="13:00" className="bg-background text-foreground">1:00 PM</option>
                    <option value="14:00" className="bg-background text-foreground">2:00 PM</option>
                    <option value="18:00" className="bg-background text-foreground">6:00 PM</option>
                    <option value="19:00" className="bg-background text-foreground">7:00 PM</option>
                    <option value="20:00" className="bg-background text-foreground">8:00 PM</option>
                    <option value="21:00" className="bg-background text-foreground">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-white mb-2">
                    Guests <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gold/50"
                    required
                  >
                    <option value="" disabled className="bg-background text-foreground">
                      Number of guests
                    </option>
                    <option value="1" className="bg-background text-foreground">1 Person</option>
                    <option value="2" className="bg-background text-foreground">2 People</option>
                    <option value="3" className="bg-background text-foreground">3 People</option>
                    <option value="4" className="bg-background text-foreground">4 People</option>
                    <option value="5" className="bg-background text-foreground">5 People</option>
                    <option value="6" className="bg-background text-foreground">6 People</option>
                    <option value="7+" className="bg-background text-foreground">7+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="requests" className="block text-white mb-2">
                  Special Requests
                </label>
                <textarea
                  id="requests"
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
                  placeholder="Any special requirements or requests"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary bg-gold hover:bg-gold/90 text-black px-8 py-3"
                >
                  Book Your Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
