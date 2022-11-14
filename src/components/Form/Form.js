import { FaBug, FaTimes } from "react-icons/fa";
import "./Form.css";
import { IconContext } from "react-icons";

const Form = (props) => {
  const {
    addBug,
    onBugDescriptionChangeHandler,
    onBugPriorityChangeHandler,
    bugDescription,
    bugPriority,
    hideForm,
    onClickHandler,
  } = props;

  let classes = "form";
  // if hideForm is true, add hide class
  classes += hideForm ? " hide" : "";

  return (
    <form autoComplete="off" onSubmit={addBug} className={classes}>
      <IconContext.Provider
        value={{ className: "form__icon form__icon--close" }}
      >
        <span id="close-button">
          <FaTimes onClick={onClickHandler} />
        </span>
      </IconContext.Provider>
      <input
        autoComplete="false"
        name="hidden"
        type="text"
        style={{ display: "none" }}
      />
      <IconContext.Provider value={{ className: "form__icon form__icon--bug" }}>
        <FaBug />
      </IconContext.Provider>
      <h3 className="form__heading">Add new bug</h3>
      <label className="form__label" htmlFor="bugDescription">
        Bug Description
      </label>
      <input
        type="text"
        id="bugDescription"
        value={bugDescription}
        onChange={onBugDescriptionChangeHandler}
        placeholder="Enter a brief description here"
        minLength="10"
        maxLength="200"
        required
      />
      <label className="form__label" htmlFor="bugPriority">
        Bug Priority
      </label>
      <select
        className="form__select"
        name="bugPriority"
        id="bugPriority"
        value={bugPriority}
        onChange={onBugPriorityChangeHandler}
        required
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <span className="btn-wrapper">
        <button className="btn btn--primary" type="submit">
          Add New Bug
        </button>
      </span>
    </form>
  );
};

export default Form;
