
import React from "react";
import Landing from "./components/landing";
import { HashRouter as Router, Routes, Route, } from "react-router-dom";
import Resources from "./components/resources";
import GalleryPage from "./components/gallerypage";
import Story from "./components/story";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="gallery" element={<GalleryPage />}/>
        <Route path="resources" element={<Resources />}/>
        <Route path="story" element={<Story />}/>
      </Routes>
    </Router>
  );
}

export default App;
