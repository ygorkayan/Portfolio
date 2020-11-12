import React from "react";
import ReactDOM from "react-dom";
import StylesGlobais from "./StylesGlobais";

import Header from "./Components/Header/Header";
import Sobre from "./Components/Sobre/Sobre";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <div className="componentes-responsivo">
      <Header />
      <Sobre />
      <Portfolio />
      <Footer />
    </div>
    <StylesGlobais />
  </React.StrictMode>,
  document.getElementById("root")
);
