import * as React from "react";
import "./styles/App.css";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

import TopBannerFunction from "./components/TopBannerFunction";

function App() {
  return (
    <NextUIProvider>
      <TopBannerFunction/>
    </NextUIProvider>
  );
}

export default App;
