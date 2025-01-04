import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";
import Searchbox from "../components/Searchbox";

export default function Home  () {
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


