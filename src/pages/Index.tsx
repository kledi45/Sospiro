
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Chef from "@/components/Chef";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Chef />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
