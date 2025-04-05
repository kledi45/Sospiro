
import { useState, useRef, useEffect } from "react";

interface Testimonial {
  text: string;
  author: string;
}

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials: Testimonial[] = [
    {
      text: "This restaurant exceeded all my expectations! From the impeccable service to the outstanding cuisine, every aspect of my dining experience was top-notch. The food was absolutely delicious, prepared with care and attention to detail. I highly recommend this restaurant to anyone looking for a memorable dining experience.",
      author: "Monah"
    },
    {
      text: "The service was very nice and friendly. The food was also Great. 10/10. Didn't wait too long. Everything was clean and fresh.",
      author: "Fisnik"
    },
    {
      text: "Excellent food and great service. Nice wine selection! The ambiance was very nice, waiter was friendly. We ordered from the special of the day menu.",
      author: "Tyler T"
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-primary mb-4">Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What our guests say about their dining experience at Sospiro.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="relative overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-card p-8 rounded-lg shadow-md border border-border">
                      <blockquote className="text-lg italic mb-6 text-foreground">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="flex justify-end items-center">
                        <div className="text-right">
                          <cite className="font-playfair font-semibold text-primary not-italic">
                            — {testimonial.author}
                          </cite>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
