import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div id="header">
            <div className="logo-area">
                <img
                    src={process.env.PUBLIC_URL + "/images/logo1.png"}
                    alt="logo"
                    className="logo-img"
                />
            </div>
            <div className="search-area">
                <FaSearch className="search-icon" />
                <input
                    type="text"
                    placeholder="검색 키워드를 입력해주세요."
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default Header;
