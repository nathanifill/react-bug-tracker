import "./ProgressBar.css";

const ProgressBar = (props) => {
  return (
    <progress
      id="resolved-progress-bar"
      className="progress"
      max="100"
      value={props.value}
    ></progress>
  );
};

export default ProgressBar;
