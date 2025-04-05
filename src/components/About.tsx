
import { useEffect, useState, useRef } from "react";

const About = () => {
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
      id="about" 
      ref={sectionRef} 
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div 
            className={`relative rounded-lg overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1529417305485-480f579e7578?q=80&w=3270&auto=format&fit=crop"
              alt="Sospiro Restaurant Interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          {/* About Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="heading-lg text-primary mb-6">What makes Sospiro unique?</h2>
            <div className="space-y-4">
              <p className="text-foreground/90">
                Welcome to Sospiro Restaurant, where Italian fine dining reaches new heights under the leadership of our Executive Chef, Emin Haziri, a culinary master with a Michelin star to his name.
              </p>
              <p className="text-foreground/90">
                At Sospiro, we are dedicated to creating more than just a meal—we offer an exceptional culinary experience. Our menu artfully balances tradition and innovation, with classic Italian dishes reimagined through modern techniques and the finest ingredients.
              </p>
              <p className="text-foreground/90">
                Each plate reflects Chef Emin's unparalleled expertise and passion, developed in some of Europe's most esteemed kitchens.
              </p>
              <p className="text-foreground/90">
                Join us at Sospiro to embark on a journey of taste that honors the rich heritage of Italian cuisine, presented with a contemporary twist. Experience a dining adventure that resonates with authenticity, creativity, and the refined elegance that only a Michelin-starred chef can deliver, right here in the heart of Kosovo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
