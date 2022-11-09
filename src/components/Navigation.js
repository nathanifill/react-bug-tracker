import "./Navigation.css";
import "./Button.css";
import ProgressBar from "./ProgressBar";

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
    resolvedBugs + " out of " + totalBugs + " " + bugText + " resolved.";

  return (
    <nav className="nav">
      <span className="nav__logo-container">
        <img className="nav__logo" src="./img/logo-cropped.png" alt="Logo" />
        <p>ug Tracker</p>
      </span>
      <span className="nav__progress-bar-wrapper">
        {bugsExist && <ProgressBar value={progressValue} />}
        <label
          htmlFor="resolved-progress-bar"
          className="nav__progress-description"
        >
          {greeting} {bugsExist ? bugCount : null}
        </label>
        {/* TODO add comma formatting to resolved bugs and total bugs */}
      </span>
      <span className="btn-wrapper">
        <a href="#top" className="btn btn--primary btn--log-out">
          Log out
        </a>
      </span>
    </nav>
  );
};

export default Navigation;
