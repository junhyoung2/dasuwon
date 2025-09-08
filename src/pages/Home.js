import Header from "../components/Header";
import Category from "../components/Category";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";


const Home = () => {
  return (
    <div id="home">
      <Header/>
      <Category/>
      <Banner/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  );
};

export default Home;