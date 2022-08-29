import Header from "../components/Header";
import Footer from "../components/Footer";
import Shipping from "../components/Shipping";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Listings from "../components/Listings";

function Home() {
  return (
    <div className="w-full h-full">
    <Header/>
    <Main/>
    <Listings/>
    <Shipping/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default Home;
