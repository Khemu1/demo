import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";

import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <MobileNav />
    <App />
  </StrictMode>
);
