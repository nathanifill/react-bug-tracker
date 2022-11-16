import "./BugListTable.css";
import { FaTimes, FaUndo, FaCheck } from "react-icons/fa";

const BugListTable = (props) => {


  const { bugList, onResolveBug, onDeleteBug, onUnresolveBug, priority, isTinyScreen } =
    props;

  const resolvePressed = (bug) => {
    onResolveBug(bug);
  };

  const deletePressed = (id) => {
    onDeleteBug(id);
  };

  const unresolvePressed = (bug) => {
    onUnresolveBug(bug);
  };

  let filteredBugList = bugList;

  if (priority !== undefined) {
    filteredBugList = bugList.filter((bug) => bug.priority === priority);
  }

  let tableBodyContent = (
    <tr className="table__row table__row--empty">
      <td className="table__cell" colSpan="3">
        No {priority ? priority.toLowerCase() + " priority " : null} bugs found.
      </td>
    </tr>
  );

  if (filteredBugList.length > 0) {
    tableBodyContent = filteredBugList.map((bug) => (
      <tr className="table__row" key={bug.id}>
        <td className="table__cell">
          {isTinyScreen && (
            <span
              className={`ball ball--table ball--${bug.priority.toLowerCase()}`}
            ></span>
          )}
          <p>{bug.description}</p>
        </td>
        {props.resolved && !isTinyScreen && (
          <td className="table__cell">
            <p>{bug.priority}</p>
          </td>
        )}
        <td className="table__cell">
          {!props.resolved && (
            <button
              className="btn btn--secondary"
              onClick={() => resolvePressed(bug)}
            >
              {/* Shows different text based on window width */}
              {!isTinyScreen ? "Resolve" : <FaCheck aria-label="Resolve" />}
            </button>
          )}
          {!props.resolved && (
            <button
              className="btn btn--danger"
              onClick={() => deletePressed(bug.id)}
            >
              {!isTinyScreen ? "Delete" : <FaTimes aria-label="Delete" />}
            </button>
          )}
          {props.resolved && (
            <button
              className="btn btn--secondary"
              onClick={() => unresolvePressed(bug)}
            >
              {/* Shows different text based on window width */}
              {!isTinyScreen ? "Unresolve" : <FaUndo aria-label="Unresolve" />}
            </button>
          )}
        </td>
      </tr>
    ));
  }

  return (
    <div className="table-container">
      <table className="table">
        <thead className="table__head">
          <tr className="table__header-row">
            <th className="table__header">Description</th>
            {props.resolved && !isTinyScreen && (
              <th className="table__header">Priority</th>
            )}
            <th className="table__header">Actions</th>
          </tr>
        </thead>
        <tbody>{tableBodyContent}</tbody>
      </table>
    </div>
  );
};

export default BugListTable;
