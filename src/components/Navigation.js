import "./Navigation.css";
import "./Button.css";
import ProgressBar from "./ProgressBar";
import { formatNumber } from "../utils";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Navigation = (props) => {
  let progressValue = 0;
  let greeting = "There are no bugs to report.";
  const resolvedBugs = +props.resolvedBugs;
  const totalBugs = +props.totalBugs;

  const bugsExist = totalBugs > 0;

  if (bugsExist) {
    progressValue = Math.round((resolvedBugs / totalBugs) * 100);

    if (progressValue === 100) {
      greeting = resolvedBugs >= 3 ? "What an incredible effort! All " : "";
    } else if (progressValue >= 70) {
      greeting = "Nice work! ";
    } else if (progressValue >= 50) {
      greeting = "You're past the half way point! ";
    } else if (progressValue >= 30) {
      greeting = "Keep going! ";
    } else {
      greeting = "It's time for a big push - ";
      greeting += resolvedBugs > 0 ? "only " : "";
    }
  }

  let bugText = props.totalBugs > 1 ? "bugs" : "bug";

  let bugCount =
    formatNumber(resolvedBugs) +
    " out of " +
    formatNumber(totalBugs) +
    " " +
    bugText +
    " resolved.";

  return (
    <nav className="nav">
      <span className="nav__logo-container">
        <img
          className="nav__logo"
          src="../img/bug-shield-cropped.png"
          alt="Logo"
        />
        <p className="nav__app-name">Bug Tracker</p>
      </span>
      <span className="nav__progress-bar-wrapper">
        {bugsExist && <ProgressBar value={progressValue} />}
        <label
          htmlFor="resolved-progress-bar"
          className="nav__progress-description"
        >
          {greeting} {bugsExist ? bugCount : null}
        </label>
      </span>
      <div className="nav__actions">
        <a href="#top" onClick={props.onAddNewBug} className="nav__link">
          Add New Bug
        </a>
        {/* FAKE LOG OUT */}
        <Link to="/">
          <button className="btn btn--primary btn--log-out">
            {props.isTinyScreen ? <MdLogout /> : "Log out"}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
