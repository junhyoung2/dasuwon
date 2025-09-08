import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import detailData from "../assets/detail.json";
import Category from "../components/Category";

const CATEGORY1 = [
  "전체",
  "정원 /마당 시공",
  "옥상 정원",
  "석재 / 목재 시설물",
  "조명 및 조경 소품",
  "기초 / 토목공사",
];
const CATEGORY2 = [
  "전체",
  "관목",
  "교목",
  "수목류",
  "초화류",
  "잔디",
  "특수 식물",
];

const ITEMS_PER_PAGE = 8;

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const keyword = params.get("keyword")?.trim() || "";

  const [selectedCat1, setSelectedCat1] = useState("전체");
  const [selectedCat2, setSelectedCat2] = useState("전체");
  const [page, setPage] = useState(1);

  // 필터링
  const filtered = detailData.filter(item => {
    let ok = true;
    if (selectedCat1 !== "전체") ok = ok && item.category === selectedCat1;
    if (selectedCat2 !== "전체") ok = ok && item.category === selectedCat2;
    if (keyword) {
      const lower = keyword.toLowerCase();
      ok = ok && (
        (item.title && item.title.toLowerCase().includes(lower)) ||
        (item.subTitle && item.subTitle.toLowerCase().includes(lower)) ||
        (item.category && item.category.toLowerCase().includes(lower))
      );
    }
    return ok;
  });

  // 페이징
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div id="search">
      <Header />
      <Category/>
      <div className="search-wrap">
        {/* 좌측 필터 */}
        <aside className="search-filter">
          <div className="filter-group">
            <div className="filter-label">시공별 카테고리</div>
            {CATEGORY1.map(cat => (
              <div
                key={cat}
                className={`filter-item${selectedCat1 === cat ? " active" : ""}`}
                onClick={() => { setSelectedCat1(cat); setPage(1); }}
              >
                {cat}
              </div>
            ))}
          </div>
          <div className="filter-group">
            <div className="filter-label">나무 / 식물별 카테고리</div>
            {CATEGORY2.map(cat => (
              <div
                key={cat}
                className={`filter-item${selectedCat2 === cat ? " active" : ""}`}
                onClick={() => { setSelectedCat2(cat); setPage(1); }}
              >
                {cat}
              </div>
            ))}
          </div>
        </aside>
        {/* 우측 결과 */}
        <main className="search-main">
          <div className="search-result-header">
            <span>
              총 {total}개의 결과
              {keyword && (
                <span style={{ marginLeft: 12, color: "#25613e", fontWeight: 500 }}>
                  (검색어: <b>{keyword}</b>)
                </span>
              )}
            </span>
          </div>
          <div className="search-grid">
            {paged.map(item => (
              <div
                className="search-card"
                key={item.id}
                onClick={() => navigate(`/detail/${item.id}`)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="search-card-img"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + (
                      item.images && item.images.length > 0
                        ? item.images[0]
                        : item.image
                    )})`,
                  }}
                />
                <div className="search-card-title">{item.title}</div>
                <div className="search-card-sub">{item.subTitle}</div>
              </div>
            ))}
            {/* 빈 칸 채우기 */}
            {Array.from({ length: ITEMS_PER_PAGE - paged.length }).map((_, i) => (
              <div className="search-card empty" key={`empty-${i}`}></div>
            ))}
          </div>
          {/* 페이지네이션 */}
          <div className="search-pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <span
                key={i}
                className={page === i + 1 ? "active" : ""}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </span>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Search;