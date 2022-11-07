import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import BugListTable from "./components/BugListTable";
import Navigation from "./components/Navigation";

function App() {
  const [bugDescription, setBugDescription] = useState("");
  const [bugPriority, setBugPriority] = useState("Medium");
  const [bugList, setBugList] = useState([]);

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

  return (
    <div className="App">
      <main className="main">
        {/* <Navigation /> */}

        <h1>Bug Tracker</h1>
        <BugListTable bugList={bugList} onDeleteBug={deleteBug} />
        <form onSubmit={addBug} className="add-new-bug-form">
          <label htmlFor="bugDescription">Bug Description</label>
          <input
            type="text"
            id="bugDescription"
            value={bugDescription}
            onChange={onBugDescriptionChangeHandler}
          />
          <label htmlFor="bugPriority">Bug Priority</label>
          <select
            name="bugPriority"
            id="bugPriority"
            value={bugPriority}
            onChange={onBugPriorityChangeHandler}
          >
            <option value="Low ">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit">Add New Bug</button>
        </form>
      </main>
    </div>
  );
}

export default App;
