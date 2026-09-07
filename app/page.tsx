import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import History from "@/components/sections/History";
import Solutions from "@/components/sections/Solutions";
import Products from "@/components/sections/Products";
import Technology from "@/components/sections/Technology";
import Differentials from "@/components/sections/Differentials";
import Clients from "@/components/sections/Clients";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <History />
      <Solutions />
      <Products />
      <Technology />
      <Differentials />
      <Clients />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
