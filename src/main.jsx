import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./components/Nav"; // Import your custom navigation component here.
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>
);
