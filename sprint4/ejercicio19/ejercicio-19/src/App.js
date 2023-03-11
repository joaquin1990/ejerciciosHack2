import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import ListContent from "./components/list/ListApp";

function App() {
  return (
    <BrowserRouter>
      <div className="App vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<ListContent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
