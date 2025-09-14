import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalContextProvider } from "./context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  </StrictMode>
);
