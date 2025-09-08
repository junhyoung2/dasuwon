const Pnumber = () => {
  return (
    <div id="pnumber">
      <h2>견적 문의</h2>
      <div className="pnumber-desc">
        <div className="pnumber-img-wrap">
          <img
            src={process.env.PUBLIC_URL + "/images/dasuwon1.jpeg"}
            alt="견적 이미지"
            className="p-img"
            loading="lazy"
          />
          <div className="pnumber-img-text">
            궁금한 점이나 견적 상담은 편하게 문의해주세요.<br />
            빠른 회신으로 친절하게 안내해드립니다.<br />
            <span className="pnumber-phone">010-6208-8346</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pnumber;