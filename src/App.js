import "./App.css";
import Calculation from "./blocks/calculation/Calculation";
import Development from "./blocks/development/Development";
import Footer from "./blocks/footer/Footer";
import Main from "./blocks/main/Main";
import Partners from "./blocks/partners/Partners";
// import Questions from "./blocks/questions/Questions";
import Voprosy from "./blocks/questions/Voprosy";
import Set from "./blocks/set/Set";
import Stages from "./blocks/stages/Stages";
import Uslugi from "./blocks/uslugi/Uslugi";
import Why from "./blocks/why/Why";
import Works from "./blocks/works/Works";
import Certification from "./blocks/сertification/Certification";
function App() {
  return (
    <div className="App">
      <Main />
      <Uslugi />
      <Works />
      <Why />
      <Set />
      <Development />
      <Certification />
      <Calculation />
      <Stages />
      <Voprosy />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
