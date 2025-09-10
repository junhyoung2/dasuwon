import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Category = ({ mobileOpen, onClose, onCategoryClick }) => {
  const categories = [
    "회사소개",
    "사업안내",
    "시공사례",
    "견적 문의",
    "FAQ"
  ];
  const navigate = useNavigate();
  const location = useLocation();

  // 모바일 width 감지
  const isMobile = window.innerWidth <= 430;

  const handleClick = idx => {
    if (onCategoryClick) {
      onCategoryClick(idx);
    } else {
      if (location.pathname !== "/") {
        navigate(`/?section=${idx}`);
      }
    }
    if (isMobile && onClose) onClose();
  };

  // 모바일: 메뉴버튼 클릭 시만 노출
  if (isMobile && !mobileOpen) return null;

  return (
    <div id="category" style={isMobile ? { position: "absolute", top: 56, left: 0, width: "100vw", background: "#fff", zIndex: 200, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" } : {}}>
      <div className="category" style={isMobile ? { flexDirection: "column", alignItems: "flex-start", padding: "18px 24px" } : {}}>
        {categories.map((cat, idx) => (
          <span
            key={cat}
            onClick={() => handleClick(idx)}
            style={{
              cursor: "pointer",
              marginRight: isMobile ? 0 : 18,
              marginBottom: isMobile ? 18 : 0,
              fontSize: isMobile ? 18 : undefined,
              fontWeight: isMobile ? 500 : undefined
            }}
          >
            {cat}
          </span>
        ))}
        {/* {isMobile && (
          <span
            style={{ marginTop: 12, color: "#888", cursor: "pointer" }}
            onClick={onClose}
          >
            닫기
          </span>
        )} */}
      </div>
    </div>
  );
};

export default Category;