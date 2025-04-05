
import { useEffect, useState, useRef } from "react";

const Chef = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="chef"
      ref={sectionRef}
      className="relative section-padding text-white"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1556637641-0ac7101023f9?q=80&w=3270&auto=format&fit=crop')",
            opacity: 0.3
          }}
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Chef Image */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=3024&auto=format&fit=crop"
              alt="Chef Emin Haziri"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3"></div>
          </div>
          
          {/* Chef Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="heading-lg mb-2 text-gold">Executive Chef</h2>
            <h3 className="heading-xl mb-6">Emin Haziri</h3>
            <div className="space-y-4">
              <p className="text-white/90">
                With decades of culinary excellence and a coveted Michelin star to his name, Chef Emin Haziri brings unparalleled expertise to Sospiro Restaurant. His journey through Europe's most prestigious kitchens has shaped his distinctive approach to Italian cuisine.
              </p>
              <p className="text-white/90">
                Chef Emin's philosophy centers on honoring traditional Italian techniques while embracing modern innovation. His meticulous attention to detail and commitment to using only the finest seasonal ingredients ensures every dish is a masterpiece.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 my-6 italic">
                "True Italian cuisine is about simplicity and respect—for ingredients, for tradition, and for the diner's experience. My goal is to create dishes that evoke emotion and memory with every bite."
              </blockquote>
              <p className="text-white/90">
                Under Chef Emin's leadership, Sospiro has become Kosovo's premier destination for authentic yet reimagined Italian fine dining.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
