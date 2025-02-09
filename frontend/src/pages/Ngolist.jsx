import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Searchbox from "../components/Searchbox";
import { fetchNgoData } from "../db/ngoManager";

function Ngolist() {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNgoData();

      if (data != null) {
        setNgos(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Searchbox ngos={ngos} />
      <Footer />
    </div>
  );
}

export default Ngolist;
