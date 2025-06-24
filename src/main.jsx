import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./ContextApi/ThemeProvider.jsx";
import ProjectSample from "./ContextApi/ProjectSample.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <ThemeProvider>
      <ProjectSample>
      <App />
      </ProjectSample>
    </ThemeProvider>
    
  </StrictMode>
);
