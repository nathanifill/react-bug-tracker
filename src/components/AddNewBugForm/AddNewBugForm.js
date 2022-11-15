import { FaBug, FaTimes } from "react-icons/fa";
import "./AddNewBugForm.css";
import "../Form.css";
import { IconContext } from "react-icons";

const AddNewBugForm = (props) => {
  const {
    addBug,
    onBugDescriptionChangeHandler,
    onBugPriorityChangeHandler,
    bugDescription,
    bugPriority,
    hideForm,
    onClickHandler,
  } = props;

  let classes = "add-new-bug-form";
  // if hideForm is true, add hide class
  classes += hideForm ? " hide" : "";

  return (
    <form autoComplete="off" onSubmit={addBug} className={classes}>
      <IconContext.Provider
        value={{
          className: "add-new-bug-form__icon add-new-bug-form__icon--close",
        }}
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
      <IconContext.Provider
        value={{
          className: "add-new-bug-form__icon add-new-bug-form__icon--bug",
        }}
      >
        <FaBug />
      </IconContext.Provider>
      <h3 className="add-new-bug-form__heading">Add new bug</h3>
      <label className="add-new-bug-form__label" htmlFor="bugDescription">
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
      <label className="add-new-bug-form__label" htmlFor="bugPriority">
        Bug Priority
      </label>
      <select
        className="add-new-bug-form__select"
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
        <button className="btn btn--primary" type="submit">
          Add New Bug
        </button>
    </form>
  );
};

export default AddNewBugForm;
