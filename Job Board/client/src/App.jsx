import React from "react";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseJob from "./pages/BrowseJob";
import Pages from "./pages/Pages";
import Login from "./pages/Login";
import JobPostForm from "./pages/JobPostForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse-jobs" element={<BrowseJob />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobpost" element={<JobPostForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
