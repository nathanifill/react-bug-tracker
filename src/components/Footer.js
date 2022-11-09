import "./Footer.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <footer className="footer">
        <div className="footer__content">
          <p className="footer__copyright">
            <a className="footer__link" href="https://www.nathanifill.com">
              &copy; Copyright Nathan Ifill {new Date().getFullYear()}
            </a>
          </p>
          <ul className="footer__contact">
            <li className="footer__contact--list-item">
              <a
                className="footer__link"
                href="https://www.github.com/nathanifill"
              >
                <FaGithub />
                Open GitHub
              </a>
            </li>
            <li className="footer__contact--list-item">
              <a
                className="footer__link"
                href="mailto:nathangifill+portfolio@gmail.com"
              >
                <FaEnvelope />
                Email Support
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
