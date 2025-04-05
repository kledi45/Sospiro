
import { useState, useRef, useEffect } from "react";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Image gallery data
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=3270&auto=format&fit=crop",
      alt: "Fine dining table setting"
    },
    {
      src: "https://images.unsplash.com/photo-1734356959885-54fe2e99c1cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbGlhbiUyMHBhc3RhJTIwZGlzaCUyMGZpbmUlMjBkaW5pbmd8ZW58MHx8MHx8fDA%3D",
      alt: "Italian pasta dish"
    },
    {
      src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=3270&auto=format&fit=crop",
      alt: "Restaurant interior"
    },
    {
      src: "https://images.unsplash.com/photo-1543826173-1beeb97525d8?q=80&w=3270&auto=format&fit=crop",
      alt: "Chef preparing food"
    },
    {
      src: "https://images.unsplash.com/photo-1655779225590-34d4cb8b7f50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2luZSUyMHNlbGVjdGlvbiUyMGZpbmUlMjBkaW5naW5nfGVufDB8fDB8fHww",
      alt: "Wine selection"
    },
    {
      src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=3270&auto=format&fit=crop",
      alt: "Dessert plate"
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

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-muted"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-primary mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through Sospiro's culinary artistry, elegant ambiance,
            and the unforgettable experiences we create.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              style={{ 
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease"
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white font-medium">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center"
          >
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
