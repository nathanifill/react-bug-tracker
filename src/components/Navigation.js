import "./Navigation.css";
import "./Button.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <img className="nav__logo" src="./img/logo.png" alt="Logo" />
      <span className="nav__progress"></span>
      <span className="btn-wrapper">
        <a href="#top" className="btn btn--log-out">
          Log out
        </a>
      </span>
    </nav>
  );
};

export default Navigation;
