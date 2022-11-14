import "./App.css";
import React from "react";
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
import evoxkp from "./fonts/evoxkp.jpg";
function App() {
  return (
    <div className="App">
      <Main />
      <Uslugi />
      <Works />
      <Why />
      <Set />
      <Development />
      <div>
        <img style={{width: "100%"}} src={evoxkp} alt="" />
      </div>
      <Certification />
      <Calculation />
      <Stages />
      {/* <Voprosy /> */}
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
