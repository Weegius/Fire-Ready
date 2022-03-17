// import { Flex, } from "@chakra-ui/react";
import React from "react";
import Landing from "./components/landing";
import Gallery from "./components/gallery";
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import Resources from "./components/resources";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="gallery" element={<Gallery />}/>
        <Route path="resources" element={<Resources />}/>
      </Routes>
    </Router>
  );
}

export default App;
