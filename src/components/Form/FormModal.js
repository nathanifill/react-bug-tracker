import "./FormModal.css";
import Form from "./Form";

const FormModal = (props) => {
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
    // console.log(event);
    // console.log(event.target.className.baseVal.includes("close-button"));
    // console.log(event);
    // console.log(event.target.classList);
    // console.log(!event.target.closest("#close-button"));
    // if it's not the modal or something close to the close-button which has been clicked, return
    if (event.target.id !== "modal" && !event.target.closest("#close-button"))
      return;
    onClickHandler();
  };

  let classes = "form-modal";
  // if showModal is true, add show class
  classes += showModal ? " show" : "";

  return (
    <div id="modal" className={classes} onClick={clickHandler}>
      <Form
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

export default FormModal;
