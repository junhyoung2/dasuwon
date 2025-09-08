import { useState } from "react";
import faqData from "../assets/faq.json";
import Category from "../components/Category";
import Header from "../components/Header";

const ITEMS_PER_PAGE = 6;

const Faqdetail = () => {
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(faqData.length / ITEMS_PER_PAGE);

    const pagedFaqs = faqData.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
    );

    return (
        <>
            <Header />
            <Category />
            <div id="faqdetail" className="faqdetail-container">
                <div className="faqdetail-header">
                    <h1>FAQ</h1>
                    <span className="faqdetail-count">총 {faqData.length}건</span>
                </div>
                <div className="faq-list">
                    {pagedFaqs.map((faq, idx) => (
                        <div className="faq-item" key={faq.id || idx}>
                            <div className="faq-q">
                                <b>Q :</b> {faq.question}
                            </div>
                            <div className="faq-a">
                                <b>A :</b> {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="faq-pagination" style={{ margin: "32px 0", textAlign: "center" }}>
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className={`faq-page-btn${page === i + 1 ? " active" : ""}`}
                                onClick={() => setPage(i + 1)}
                                style={{
                                    margin: "0 6px",
                                    padding: "6px 14px",
                                    borderRadius: "6px",
                                    border: "1px solid #ddd",
                                    background: page === i + 1 ? "#25613e" : "#fff",
                                    color: page === i + 1 ? "#fff" : "#222",
                                    fontWeight: page === i + 1 ? "bold" : "normal",
                                    cursor: "pointer"
                                }}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Faqdetail;