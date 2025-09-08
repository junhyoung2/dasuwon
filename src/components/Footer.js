const Footer = () => {
    return (
        <div id="footer">
            <h3 className="footer-title">오시는 길</h3>
            <div className="footer-map-wrap">
                <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.8882456233962!2d126.92590793887045!3d37.30043072664242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b69004aceafbf%3A0x2d5a8cddcede349b!2z64uk7IiY7JuQ7KGw6rK9!5e0!3m2!1sko!2skr!4v1757305776812!5m2!1sko!2skr"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="다수원조경 위치"
                ></iframe>
            </div>
            <div className="footer-info">
                <div className="footer-logo-title">
                    <img
                        src={process.env.PUBLIC_URL + "/images/logo1.png"}
                        alt="logo"
                        className="footer-logo-img"
                    />
                   
                </div>
                <div className="footer-desc">
                    <div>대표자 : 박주문</div>
                    <div>사업자등록번호 : 463-48-00576</div>
                    <div>주소 : 경기도 안산시 상록구 충정공길 59(사사동)</div>
                </div>
            </div>
            <p className="footer-copyright">
                © 2025 다수원조경. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;