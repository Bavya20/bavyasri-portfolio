
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-sage-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sage-200">
            © 2025 Saravana Bavya Sri. Crafted with passion and curiosity.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
