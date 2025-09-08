import { HashRouter, Routes, Route } from "react-router-dom";
import "./app.scss"
import Home from "./pages/Home";
import Search from "./pages/Search"; 

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Search />} />
      </Routes>
    </HashRouter>
  );
};

export default App;