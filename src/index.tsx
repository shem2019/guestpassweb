import React from "react";
import ReactDOM from "react-dom/client";
// Import the precompiled Tailwind CSS.
//
// We generate this file via the Tailwind CLI (`npx tailwindcss -i ./src/styles/tailwind.css -o ./src/styles/generated.css`).
// This ensures that all Tailwind directives are processed since CRA does not
// currently run Tailwind through PostCSS by default.
import App from "./App";
// …

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
