import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Room, Landing } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
