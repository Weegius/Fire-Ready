// import { Flex, } from "@chakra-ui/react";
import React from "react";
import Landing from "./components/landing";
import Gallery from "./components/gallery";
import { HashRouter as Router, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="gallery" element={<Gallery />}/>
      </Routes>
    </Router>
  );
}

export default App;
