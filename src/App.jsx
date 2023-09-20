import "./App.css";
import BarCharts from "./assets/components/BarCharts/BarCharts";
import Hero from "./assets/components/Hero/Hero";
import LineChart from "./assets/components/LineChart/LineChart";
import Navbar from "./assets/components/Navbar/Navbar";
import PieCharts from "./assets/components/PieCharts/PieCharts";
import PriceTables from "./assets/components/PriceTables/PriceTables";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <PriceTables></PriceTables>
      <LineChart></LineChart>
      <BarCharts></BarCharts>
      <PieCharts></PieCharts>
    </>
  );
}

export default App;
