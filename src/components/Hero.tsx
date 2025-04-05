
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1514516816566-de580c621376?q=80&w=3024&auto=format&fit=crop')", 
            opacity: 0.6 
          }}
        />
      </div>

      {/* Content */}
      <div 
        className={`container-custom relative z-10 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-white heading-xl mb-6">
          Where Italian Fine Dining <br className="hidden md:block" /> Reaches New Heights
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Experience the refined taste of Italy with Michelin-starred expertise
          at the heart of Prishtina.
        </p>
        <a
          href="#reservations"
          className="btn-primary bg-burgundy hover:bg-burgundy/90 text-white px-8 py-4 text-lg"
        >
          Book a Table
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
