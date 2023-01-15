import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from "./pages/Home";
import {AddItem} from "./pages/AddItem";
import {Browse} from "./pages/Browse";
import {Contact} from "./pages/Contact";
import {Overview} from "./pages/Overview";



export default function App() {
  return (
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/addItem" element={<AddItem/>} />
      <Route  path="/browser" element={<Browse/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route  path="/overview" element={<Overview/>} />
      <Route  path="*" element={<Home/>} />

    </Routes>
  );
}
