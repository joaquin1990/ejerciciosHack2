import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import MovieDetail from "./components/filmContainer/movie/MovieDetail";
import AboutUs from "./components/hero/others/AboutUs";
import Contact from "./components/hero/others/Contact";
import NotFound404 from "./components/others/NotFound404";
import Search from "./components/search/Search";

function App() {
  return (
    <BrowserRouter>
      <div className="App vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/pelicula/:movieId" element={<Navigate replace to="/movie/:movieId" />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/404" element={<NotFound404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
