import "./FormModal.css";
import AddNewBugForm from "../AddNewBugForm/AddNewBugForm";

const AddNewBugFormModal = (props) => {
  const {
    onClickHandler,
    showModal,
    addBug,
    onBugDescriptionChangeHandler,
    onBugPriorityChangeHandler,
    bugDescription,
    bugPriority,
  } = props;

  const clickHandler = (event) => {
    if (event.target.id !== "modal" && !event.target.closest("#close-button"))
      return;
    onClickHandler();
  };

  let classes = "form-modal";
  // if showModal is true, add show class
  classes += showModal ? " show" : "";

  return (
    <div id="modal" className={classes} onClick={clickHandler}>
      <AddNewBugForm
        addBug={addBug}
        onBugDescriptionChangeHandler={onBugDescriptionChangeHandler}
        onBugPriorityChangeHandler={onBugPriorityChangeHandler}
        bugDescription={bugDescription}
        bugPriority={bugPriority}
        hideForm={!showModal}
        onClickHandler={clickHandler}
      />
    </div>
  );
};

export default AddNewBugFormModal;
