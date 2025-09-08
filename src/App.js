import { HashRouter, Routes, Route } from "react-router-dom";
import "./app.scss";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Faq from "./components/Faq";
import Faqdetail from "./pages/Faqdetail"; // 추가

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/faqdetail" element={<Faqdetail />} /> 
            </Routes>
        </HashRouter>
    );
};

export default App;