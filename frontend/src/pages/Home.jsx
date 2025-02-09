import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";

export default function Home() {
  return (
    <div>
      <div className="navbar">
        <Hero />
        <Hero2 />
        <Footer />
      </div>
    </div>
  );
}
