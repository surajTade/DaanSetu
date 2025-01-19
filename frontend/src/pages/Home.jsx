import { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";
import Searchbox from "../components/Searchbox";
import { getAllNgoData } from "../db/ngoManager";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllNgoData();
      console.log(data[0].name);
    };

    fetchData();
  }, []);
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
