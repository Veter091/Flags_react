import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Where in the world?</h1>

        <div className="theme">
          <div className="theme__icon"></div>
          <div className="theme__text">Light Mode</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
