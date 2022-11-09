/* TODO - 
1. stop empty descriptions from being added with bugs
2. add undo resolve button
3. make form look nice
4. animate log out button
5. build log in page
6. responsive styles

*/

import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import BugListTable from "./components/BugListTable";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const [bugDescription, setBugDescription] = useState("");
  const [bugPriority, setBugPriority] = useState("Medium");
  const [bugList, setBugList] = useState([]);
  const [resolvedBugList, setResolvedBugList] = useState([]);

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

  const resolveBug = (resolvedBug) => {
    const updatedBugList = bugList.filter((bug) => bug.id !== resolvedBug.id);
    setBugList(updatedBugList);

    // Add bug to bug list
    setResolvedBugList((prevResolvedBugList) => [
      ...prevResolvedBugList,
      resolvedBug,
    ]);
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
        <Navigation
          resolvedBugs={resolvedBugList.length}
          totalBugs={bugList.length + resolvedBugList.length}
        />

        <h2>🔴&emsp;High Priority</h2>
        <BugListTable
          bugList={bugList}
          onResolveBug={resolveBug}
          onDeleteBug={deleteBug}
          priority="High"
        />

        <h2>🟠&emsp;Medium Priority</h2>
        <BugListTable
          bugList={bugList}
          onResolveBug={resolveBug}
          onDeleteBug={deleteBug}
          priority="Medium"
        />

        <h2>🟡&emsp;Low Priority</h2>
        <BugListTable
          bugList={bugList}
          onResolveBug={resolveBug}
          onDeleteBug={deleteBug}
          priority="Low"
        />

        <h2>🟢&emsp;Resolved Bugs</h2>
        <BugListTable
          bugList={resolvedBugList}
          onResolveBug={resolveBug}
          onDeleteBug={deleteBug}
          resolved
        />

        <hr />
        {/* <h1>Bug Tracker</h1>
        <BugListTable bugList={bugList} onResolveBug={resolveBug} /> */}
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
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button type="submit">Add New Bug</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default App;
