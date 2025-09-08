import { useNavigate } from "react-router-dom";

const Section3 = () => {
      const navigate = useNavigate();
    return (
        <div id="section">
            <div className="section-header">
                <h2>시공사례</h2>
                    <button
                    className="more-btn"
                    onClick={() => navigate("/search")}
                >
                    더보기 &gt;
                </button>
            </div>
            
            <div className="section-contents">
                <div className="sction-1">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon1.jpeg"}
                        alt="section-1"
                        className="section-img"
                    />
                </div>
                <div className="sction-2">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon6.jpeg"}
                        alt="section-2"
                        className="section-img"
                    />
                </div>
                <div className="sction-3">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon9.jpeg"}
                        alt="section-3"
                        className="section-img"
                    />
                </div>
                <div className="sction-4">
                    <img
                        src={process.env.PUBLIC_URL + "/images/dasuwon10.jpeg"}
                        alt="section-4"
                        className="section-img"
                    />
                </div>
             
            </div>
        </div>
    );
};

export default Section3;
