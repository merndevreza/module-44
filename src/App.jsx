import "./App.css";
import Hero from "./assets/components/Hero/Hero";
import Navbar from "./assets/components/Navbar/Navbar";
import PriceTables from "./assets/components/PriceTables/PriceTables";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <PriceTables></PriceTables>
    </>
  );
}

export default App;
