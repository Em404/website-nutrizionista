import * as React from "react";
import "./styles/App.css";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

import TopBannerFunction from "./components/TopBannerFunction";
import CustomNavbarFunction from "./components/CustomNavbarFunction";
import CustomFooterFunction from "./components/CustomFooterFunction";
import HomeFunction from "./components/HomeFunction";

function App() {
  return (
    <NextUIProvider>
      <TopBannerFunction/>
      <CustomNavbarFunction/>
      <HomeFunction/>
      <CustomFooterFunction/>
    </NextUIProvider>
  );
}

export default App;
