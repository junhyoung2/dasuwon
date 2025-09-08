const Section2 = () => {
    return (
        <div id="section">
            <div className="section-header">

            <h2>사업안내</h2>
            </div>
            <div className="section-contents">
                <div className="sction-1">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon15.png"}
                        alt="section-1"
                        className="section-img"
                    />
                    <span>시공별 서비스</span>
                    <p>
                        정원·마당 시공부터 옥상정원, 석재/목재 시설물, 조명 및
                        조경 소품, 기초·토목공사까지 공간의 규모와 특성에 맞춘
                        맞춤형 시공을 진행합니다.
                    </p>
                </div>
                <div className="sction-2">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon16.png"}
                        alt="section-2"
                        className="section-img"
                    />
                    <span>나무·식물별 서비스</span>
                    <p>
                        관목, 교목, 수목류, 초화류, 잔디, 특수식물 등 다양한
                        식재 공법을 적용하여 자연과 어우러진 쾌적한 환경을
                        조성합니다.
                    </p>
                </div>
                <div className="sction-3">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon17.png"}
                        alt="section-3"
                        className="section-img"
                    />
                    <span>유지·관리 서비스</span>
                    <p>
                        완공 후에도 정기적인 관리와 맞춤형 컨설팅을 통해 조경
                        공간의 가치를 오래도록 유지합니다.
                    </p>
                </div>
                <div className="sction-4">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon18.png"}
                        alt="section-4"
                        className="section-img"
                    />
                    <span>설계·기획 서비스</span>
                    <p>
                        공간의 용도와 환경에 맞춘 창의적인 설계로 차별화된 조경
                        공간을 제안합니다.
                    </p>
                </div>
                <div className="sction-5">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon19.png"}
                        alt="section-5"
                        className="section-img"
                    />
                    <span>환경·친화 서비스</span>
                    <p>
                        친환경 자재와 지속 가능한 식재 방식을 적용하여 사람과
                        자연이 함께하는 공간을 만들어갑니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section2;
