import { useNavigate } from "react-router-dom";
import faqData from "../assets/faq.json";


const Faq = () => {
  const navigate = useNavigate();
  const previewFaqs = faqData.slice(0, 6);

  return (
    <div id="faq">
      <div className="faqdetail-header">
        <h1>FAQ</h1>
        <button
          className="faq-more-btn"
          onClick={() => navigate("/faqdetail")}
        >
          더보기 &gt;
        </button>
      </div>
      <div className="faq-list">
        {previewFaqs.map((faq, idx) => (
          <div className="faq-item" key={faq.id || idx}>
            <div className="faq-q"><b>Q :</b> {faq.question}</div>
            <div className="faq-a">A: {faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;