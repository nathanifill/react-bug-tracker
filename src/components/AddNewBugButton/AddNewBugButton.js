import { FaPlus } from "react-icons/fa";
import styles from "./AddNewBugButton.module.css";

const AddNewBugButton = (props) => {
  const clickHandler = () => {
    // Open modal
    props.onAddNewBug();
  };

  return (
    <button onClick={clickHandler} className={`${styles.btn} btn--blur`}>
      <FaPlus />
    </button>
  );
};

export default AddNewBugButton;
