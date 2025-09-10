import { useRef, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Category from "../components/Category";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Pnumber from "../components/Pnumber";
import Faq from "../components/Faq";

const Home = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const pnumberRef = useRef(null);
    const faqRef = useRef(null);
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 메뉴 버튼 클릭 시 토글
  const handleMenuClick = () => setMobileMenuOpen(open => !open);
    const handleCategoryClick = (idx) => {
        const refs = [
            section1Ref,
            section2Ref,
            section3Ref,
            pnumberRef,
            faqRef,
        ];
        refs[idx]?.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get("section");
        if (section !== null) {
            handleCategoryClick(Number(section));
        }
    }, [location.search]);

    return (
        <div id="home">
            <Header onMenuClick={handleMenuClick} />
            <Category
                mobileOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                onCategoryClick={handleCategoryClick}
            />
            <Banner />
            <div ref={section1Ref}>
                <Section1 />
            </div>
            <div ref={section2Ref}>
                <Section2 />
            </div>
            <div ref={section3Ref}>
                <Section3 />
            </div>
            <div ref={pnumberRef}>
                <Pnumber />
            </div>
            <div ref={faqRef}>
                <Faq />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
