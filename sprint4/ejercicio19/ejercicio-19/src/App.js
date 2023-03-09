import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import List from "./components/list/List";

function App() {
  return (
    <BrowserRouter>
      <div className="App vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:id" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
