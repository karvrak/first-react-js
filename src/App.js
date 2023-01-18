import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {Home} from "./pages/Home";
import {AddItem} from "./pages/AddItem";
import {Browser} from "./pages/Browser";
import {Contact} from "./pages/Contact";
import {Overview} from "./pages/Overview";



export default function App() {
 
  return (
    <div >
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/addItem" element={<AddItem/>} />
        <Route  path="/browser/:id" element={<Browser/>} />
        <Route  path="/contact" element={<Contact/>} />
        <Route  path="/overview/:id" element={<Overview/>} />
        <Route  path="*" element={<Home/>} />

      </Routes>
    </div>
  );
}
