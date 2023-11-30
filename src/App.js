import "./App.css";
import Fotter from "./Component/Fotter/Fotter";
import Hero from "./Component/Hero/Hero";
import Join from "./Component/Join/Join";
import Plans from "./Component/Plans/Plans";
import Programs from "./Component/Programs/Programs";
import Reason from "./Component/Reason/Reason";
import Testinomial from "./Component/Testinomial/Testinomial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testinomial />
      <Join />
      <Fotter />
    </div>
  );
}

export default App;
