import * as React from "react";
import "./styles/App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

import TopBannerFunction from "./components/TopBannerFunction";
import CustomNavbarFunction from "./components/CustomNavbarFunction";
import CustomFooterFunction from "./components/CustomFooterFunction";
import HomeFunction from "./components/HomeFunction";
import ChiSiamoFunction from "./components/ChiSiamoFunction";
import ServiziFunction from "./components/ServiziFunction";
import ContattiFunction from "./components/ContattiFunction";

function App() {
  return (
    <NextUIProvider>

      <Router>
        <TopBannerFunction/>
        <CustomNavbarFunction/>

        <Routes>
          <Route exact path="/" element={<HomeFunction />}/>
          <Route exact path="/home" element={<HomeFunction />}/>
          <Route exact path="/chi-siamo" element={<ChiSiamoFunction/>}/>
          <Route exact path="/servizi" element={<ServiziFunction/>}/>
          <Route exact path="/contatti" element={<ContattiFunction/>}/>
        </Routes>

        <CustomFooterFunction/>
      </Router>

    </NextUIProvider>
  );
}

export default App;
