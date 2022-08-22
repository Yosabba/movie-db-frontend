import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

ReactDOM.createRoot(document.getElementById("root")).render(
  //react strict mode
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:movieId" element={<MovieDetails />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
