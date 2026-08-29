import "@fontsource-variable/urbanist";
import { LucideProvider } from "lucide-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ErrorBoundary } from "./ErrorBoundary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <LucideProvider size={16.25} strokeWidth={1.04} absoluteStrokeWidth>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LucideProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
