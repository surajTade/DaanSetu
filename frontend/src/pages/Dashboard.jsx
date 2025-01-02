import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Navbar from "../components/Navbar";

function Dashboard  () {
  return (
    <div>
        <div className="navbar">
        <Navbar />
        <Hero />
        <Hero2 />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
