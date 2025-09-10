import Category from "./Category";

const Mobilemenu = ({ open, onClose, onCategoryClick }) => {
  return (
    <>
      <div
        className={`mobilemenu-overlay${open ? " open" : ""}`}
        onClick={onClose}
      />
      <nav className={`mobilemenu-drawer${open ? " open" : ""}`}>
        <div className="mobilemenu-header">
          <button
            className="mobilemenu-close"
            onClick={onClose}
            aria-label="메뉴 닫기"
          >
            &#10005;
          </button>
        </div>
        <Category
          mobileOpen={true}
          onClose={onClose}
          onCategoryClick={onCategoryClick}
        />
      </nav>
    </>
  );
};

export default Mobilemenu;