import { useState } from "react";
import rawFishesData from "./fishesData.json";
import Nav from "./components/Nav";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import FishPage from "./pages/FishPage";
import TankPage from "./pages/TankPage";

const App = () => {
  const [listOfFishes, setListOfFishes] = useState(rawFishesData.fishes);
  const [activePage, setActivePage] = useState(1);

  return (
    <Layout>
      <Header title="Aplikace pro plánování rozměrů akvária"></Header>
      <Nav activePage={activePage} setActivePage={setActivePage} />
      {activePage === 1 && (
        <FishPage list={listOfFishes} setList={setListOfFishes} />
      )}
      {activePage === 2 && (<TankPage list={listOfFishes}/>)}
    </Layout>
  );
};

export default App;
