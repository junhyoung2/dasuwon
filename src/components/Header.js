import { FaSearch, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MobileSearch from "./MobileSearch"; // 추가

const Header = ({ onMenuClick }) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");
    const [showMobileSearch, setShowMobileSearch] = useState(false); // 추가

    // 모바일 width 감지
    const isMobile = window.innerWidth <= 430;

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && keyword.trim()) {
            navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
        }
    };

    return (
        <div id="header">
            {/* 모바일: 햄버거 메뉴 */}
            {isMobile && (
                <FaBars
                    className="menu-icon"
                    onClick={onMenuClick}
                    style={{ fontSize: 22, marginRight: 12, cursor: "pointer" }}
                />
            )}
            <div className="logo-area">
                <img
                    src={
                        isMobile
                            ? process.env.PUBLIC_URL + "/images/logo2.png"
                            : process.env.PUBLIC_URL + "/images/logo1.png"
                    }
                    alt="logo"
                    className="logo-img"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                />
            </div>
            {/* 데스크탑/태블릿: 검색바, 모바일: 검색 아이콘만 */}
            <div className="search-area">
                {isMobile ? (
                    <>
                        <FaSearch
                            className="search-icon"
                            onClick={() => setShowMobileSearch(true)}
                            style={{ cursor: "pointer" }}
                        />
                        <MobileSearch
                            open={showMobileSearch}
                            onClose={() => setShowMobileSearch(false)}
                        />
                    </>
                ) : (
                    <>
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="검색 키워드를 입력해주세요."
                            className="search-input"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;