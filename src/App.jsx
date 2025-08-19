   
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import your pages
import Home from "./pages/Home";
import About from "./pages/About";
import Podcast from "./pages/Podcast";
import Donate from "./pages/Donate";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white min-h-screen flex flex-col bg-cover bg-center bg-fixed"
      style={{backgroundImage: "url('/Bg_image.png')"}}
      >
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow flex items-center justify-center p-6 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}






