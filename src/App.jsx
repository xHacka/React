import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Gallery, NotFound, Wrapper, Profile, Secret } from "./components";
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Wrapper Component={Home}/>} />
        <Route path="/gallery" element={<Wrapper Component={Gallery}/>} />
        <Route path="/profile/:user" element={<Wrapper Component={Profile}/>} />
        <Route path="/secret_5b763307374b7a1043be1cc047b2e466" element={<Secret />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
