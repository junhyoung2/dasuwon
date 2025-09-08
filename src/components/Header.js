import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && keyword.trim()) {
            navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
        }
    };

    return (
        <div id="header">
            <div className="logo-area">
                <img
                    src={process.env.PUBLIC_URL + "/images/logo1.png"}
                    alt="logo"
                    className="logo-img"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                />
            </div>
            <div className="search-area">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="검색 키워드를 입력해주세요."
                    className="search-input"
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

export default Header;