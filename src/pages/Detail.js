import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import detailData from "../assets/detail.json";
import Category from "../components/Category";


const Detail = () => {
  const { id } = useParams();
  const data = detailData.find(item => String(item.id) === String(id)) || detailData[0];

  const images = data.images && data.images.length > 0
    ? data.images
    : data.image
      ? [data.image]
      : ["/images/dasuwon1.jpeg"];

  const [imgIdx, setImgIdx] = useState(0);
  const [animDir, setAnimDir] = useState(""); // "left" or "right" or ""

  useEffect(() => {
    setImgIdx(0);
  }, [id, images]);

  const handlePrev = () => {
    setAnimDir("left");
    setTimeout(() => {
      setImgIdx(idx => (idx === 0 ? images.length - 1 : idx - 1));
      setAnimDir("");
    }, 200); // 애니메이션 시간과 맞춤
  };

  const handleNext = () => {
    setAnimDir("right");
    setTimeout(() => {
      setImgIdx(idx => (idx === images.length - 1 ? 0 : idx + 1));
      setAnimDir("");
    }, 200);
  };

  return (
    <div id="detail">
      <Header />
      <Category/>
      <div className="detail-wrap">
        <div className="detail-img-area">
          {images.length > 1 && (
            <button className="detail-arrow left" onClick={handlePrev}>&lt;</button>
          )}
          <div
            className={`detail-img${animDir ? " anim-" + animDir : ""}`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + images[imgIdx]})`
            }}
          />
          {images.length > 1 && (
            <button className="detail-arrow right" onClick={handleNext}>&gt;</button>
          )}
        </div>
        <div className="detail-info">
          <div className="detail-categories">
            {data.categoryType === 1 && (
              <div>시공별 카테고리: {data.category}</div>
            )}
            {data.categoryType === 2 && (
              <div>나무 / 식물별 카테고리: {data.category}</div>
            )}
          </div>
          <hr className="detail-hr" />
          <div className="detail-date">{data.date}</div>
          <div className="detail-title">{data.title}</div>
          <div className="detail-sub">{data.subTitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;