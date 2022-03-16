// import { Flex, } from "@chakra-ui/react";
import React from "react";
import Landing from "./components/landing";
import { HashRouter as Router, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
    </Router>
  );
}

export default App;
