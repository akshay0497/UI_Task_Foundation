import "./App.css";
import Headers from "./Components/Header";
import Images from "./Components/MainSection";
import Counter from "./Pages/Number";
import Card from "./Components/Card";
import About from "./Pages/About";

function App() {
  return (
    <>
      <div id="img" className="bg-[#070d59]">
        <Headers />
        <Images />
        <Counter/>
      </div>
      <Card/>
      <About/>
    </>
  );
}

export default App;
