import Image from "next/image";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
import Service from "./components/service";
export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
