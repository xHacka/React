import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Gallery, NotFound, Wrapper, Secret, MovieDetails } from "./components";
import './App.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Wrapper Component={Home}/>} />
        <Route path="/home" element={<Wrapper Component={Home}/>} />
        <Route path="/movies" element={<Wrapper Component={Gallery}/>} />
        <Route path="/movies/:movieId" element={<Wrapper Component={MovieDetails}/>} />
        <Route path="/secret_5b763307374b7a1043be1cc047b2e466" element={<Secret />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
