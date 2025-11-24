import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
