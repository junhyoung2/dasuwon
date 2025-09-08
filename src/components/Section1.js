const Section1 = () => {
    return (
        <div id="section">
            <div className="section-header">
            <h2>회사소개</h2>
            </div>
            <div className="section-contents">
                <div className="sction-1">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon3.jpeg"}
                        alt="section-1"
                        className="section-img"
                    />
                    <span>신뢰와 경험</span>
                    <p>
                        다수원조경은 오랜 경험과 기술력을 바탕으로 30년간 조경의
                        모든 과정을 책임져 왔습니다. 개인 정원부터 공공시설까지,
                        공간에 새로운 가치를 더해드립니다.
                    </p>
                </div>
                <div className="sction-2">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon14.png"}
                        alt="section-2"
                        className="section-img"
                    />
                    <span>전문 시공 분야</span>
                    <p>
                        설계에서 시공까지 전 과정을 책임지며, 나무 식재, 석축·옹벽,
                        잔디·데크 등 다양한 조경 공사를 전문적으로 진행합니다.
                        처음부터 끝까지 원스톱으로, 완성도 높은 결과를 제공합니다.
                    </p>
                </div>
                <div className="sction-3">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon13.png"}
                        alt="section-3"
                        className="section-img"
                    />
                    <span>고객과의 약속</span>
                    <p>
                        시공을 넘어 관리까지 책임지며, 고객 만족을 가장 중요한
                        약속으로 지킵니다. 환경을 생각하는 지속 가능한 조경으로 가치
                        있는 공간을 만들어갑니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section1;