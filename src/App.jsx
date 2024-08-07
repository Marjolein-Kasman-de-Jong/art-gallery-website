import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";

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
      <footer>
        footer
      </footer>
    </BrowserRouter>
  )
}

export default App;