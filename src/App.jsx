import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";

// Sections
import PageFooter from "./sections/page-footer/PageFooter";

// Styles
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </main>
      <PageFooter />
    </BrowserRouter>
  )
}

export default App;