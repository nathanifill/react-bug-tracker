import "../globals.css";
import { v4 as uuid } from "uuid";
import BugListTable from "../components/BugListTable";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import FormModal from "../components/FormModal/FormModal";
import useLocalStorage from "../hooks/useLocalStorage";
import "../components/Ball.css";
import { useEffect, useState } from "react";
import AddNewBugButton from "../components/AddNewBugButton/AddNewBugButton";

const Dashboard = () => {
  const [isTinyScreen, setIsTinyScreen] = useState(window.innerWidth < 600);

  const updateScreenState = () => {
    setIsTinyScreen(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenState);
    return () => window.removeEventListener("resize", updateScreenState);
  });

  useEffect(() => {
    document.title = "Dashboard | Bug Tracker";
  }, []);

  const [bugDescription, setBugDescription] = useLocalStorage(
    "bugDescription",
    ""
  );
  const [bugPriority, setBugPriority] = useLocalStorage(
    "bugPriority",
    "Medium"
  );
  const [bugList, setBugList] = useLocalStorage("bugList", []);
  const [resolvedBugList, setResolvedBugList] = useLocalStorage(
    "resolvedBugList",
    []
  );
  const [showHighPriorityBugList, setShowHighPriorityBugList] = useLocalStorage(
    "showHighPriorityBugList",
    true
  );
  const [showMediumPriorityBugList, setShowMediumPriorityBugList] =
    useLocalStorage("showMediumPriorityBugList", true);
  const [showLowPriorityBugList, setShowLowPriorityBugList] = useLocalStorage(
    "showLowPriorityBugList",
    true
  );
  const [showResolvedBugList, setShowResolvedBugList] = useLocalStorage(
    "showResolvedBugList",
    true
  );
  const [showModal, setShowModal] = useLocalStorage("showModal", false);

  const addBug = (event) => {
    event.preventDefault();
    const newBug = {
      id: uuid(),
      description: bugDescription,
      priority: bugPriority,
    };

    // Add bug to bug list
    setBugList((prevBugList) => [...prevBugList, newBug]);

    // Reset state and form
    setBugDescription("");
    setBugPriority("Medium");

    // Close modal
    toggleModal();
  };

  const resolveBug = (resolvedBug) => {
    const updatedBugList = bugList.filter((bug) => bug.id !== resolvedBug.id);
    setBugList(updatedBugList);

    // Add bug to resolved bug list
    setResolvedBugList((prevResolvedBugList) => [
      ...prevResolvedBugList,
      resolvedBug,
    ]);
  };

  const unresolveBug = (resolvedBug) => {
    // Add bug to bug list
    setBugList((prevBugList) => [...prevBugList, resolvedBug]);

    // remove bug from resolved bug list
    const updatedResolvedBugList = resolvedBugList.filter(
      (bug) => bug.id !== resolvedBug.id
    );
    setResolvedBugList(updatedResolvedBugList);
  };

  const deleteBug = (id) => {
    const updatedBugList = bugList.filter((bug) => bug.id !== id);
    setBugList(updatedBugList);
  };

  const onBugDescriptionChangeHandler = (event) => {
    setBugDescription(event.target.value);
  };

  const onBugPriorityChangeHandler = (event) => {
    setBugPriority(event.target.value);
  };

  const toggleList = (priority) => {
    switch (priority) {
      case "HIGH":
        showHighPriorityBugList
          ? setShowHighPriorityBugList(false)
          : setShowHighPriorityBugList(true);
        break;
      case "MEDIUM":
        showMediumPriorityBugList
          ? setShowMediumPriorityBugList(false)
          : setShowMediumPriorityBugList(true);
        break;
      case "LOW":
        showLowPriorityBugList
          ? setShowLowPriorityBugList(false)
          : setShowLowPriorityBugList(true);
        break;
      case "RESOLVED":
        showResolvedBugList
          ? setShowResolvedBugList(false)
          : setShowResolvedBugList(true);
        break;
      default:
        return;
    }
  };

  const toggleModal = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <div className="app">
      <main className="main">
        <Navigation
          resolvedBugs={resolvedBugList.length}
          totalBugs={bugList.length + resolvedBugList.length}
          onAddNewBug={toggleModal}
          isTinyScreen={isTinyScreen}
        />

        <h1 className="heading heading--main">YOUR TICKETS</h1>
        <span
          className="toggle-icon"
          onClick={() => {
            toggleList("HIGH");
          }}
        >
          <h2 className="heading heading--priority">
            <span className="ball ball--high"></span>High Priority
            {showHighPriorityBugList ? <FaCaretUp /> : <FaCaretDown />}
          </h2>
        </span>
        {showHighPriorityBugList && (
          <BugListTable
            bugList={bugList}
            onResolveBug={resolveBug}
            onDeleteBug={deleteBug}
            priority="High"
            isTinyScreen={isTinyScreen}
          />
        )}

        <span
          className="toggle-icon"
          onClick={() => {
            toggleList("MEDIUM");
          }}
        >
          <h2 className="heading heading--priority">
            <span className="ball ball--medium"></span>Medium Priority
            {showMediumPriorityBugList ? <FaCaretUp /> : <FaCaretDown />}
          </h2>
        </span>
        {showMediumPriorityBugList && (
          <BugListTable
            bugList={bugList}
            onResolveBug={resolveBug}
            onDeleteBug={deleteBug}
            priority="Medium"
            isTinyScreen={isTinyScreen}
          />
        )}

        <span
          className="toggle-icon"
          onClick={() => {
            toggleList("LOW");
          }}
        >
          <h2 className="heading heading--priority">
            <span className="ball ball--low"></span>Low Priority
            {showLowPriorityBugList ? <FaCaretUp /> : <FaCaretDown />}
          </h2>
        </span>
        {showLowPriorityBugList && (
          <BugListTable
            bugList={bugList}
            onResolveBug={resolveBug}
            onDeleteBug={deleteBug}
            priority="Low"
            isTinyScreen={isTinyScreen}
          />
        )}

        <span
          className="toggle-icon"
          onClick={() => {
            toggleList("RESOLVED");
          }}
        >
          <h2 className="heading heading--priority">
            <span className="ball ball--resolved"></span>Resolved
            {showResolvedBugList ? <FaCaretUp /> : <FaCaretDown />}
          </h2>
        </span>
        {showResolvedBugList && (
          <BugListTable
            bugList={resolvedBugList}
            onResolveBug={resolveBug}
            onDeleteBug={deleteBug}
            onUnresolveBug={unresolveBug}
            resolved
            isTinyScreen={isTinyScreen}
          />
        )}
        <AddNewBugButton onAddNewBug={toggleModal} />
      </main>
      <Footer />
      <FormModal
        onClickHandler={toggleModal}
        showModal={showModal}
        addBug={addBug}
        onBugDescriptionChangeHandler={onBugDescriptionChangeHandler}
        onBugPriorityChangeHandler={onBugPriorityChangeHandler}
        bugDescription={bugDescription}
        bugPriority={bugPriority}
      ></FormModal>
    </div>
  );
};

export default Dashboard;
