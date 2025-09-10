import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MobileSearch = ({ open, onClose }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && keyword.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="mobilesearch-overlay">
      <button className="mobilesearch-close" onClick={onClose} aria-label="닫기">
        <FaTimes />
      </button>
      <div className="mobilesearch-box">
        <FaSearch className="mobilesearch-icon" />
        <input
          type="text"
          className="mobilesearch-input"
          placeholder="검색 키워드를 입력해주세요."
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
};

export default MobileSearch;