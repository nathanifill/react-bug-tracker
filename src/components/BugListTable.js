import "./BugListTable.css";

const BugListTable = (props) => {
  const { bugList, onResolveBug, onDeleteBug, priority } = props;

  const resolvedPressed = (bug) => {
    onResolveBug(bug);
  };

  const deletePressed = (id) => {
    onDeleteBug(id);
  };

  let filteredBugList = bugList;

  if (priority !== undefined) {
    filteredBugList = bugList.filter((bug) => bug.priority === priority);
  }

  let tableBodyContent = (
    <tr className="table__row">
      <td className="table__cell">
        No {priority ? priority.toLowerCase() + " priority " : null} bugs found.
      </td>
      <td className="table__cell"></td>
      <td className="table__cell"></td>
    </tr>
  );

  if (filteredBugList.length > 0) {
    tableBodyContent = filteredBugList.map((bug) => (
      <tr className="table__row" key={bug.id}>
        <td className="table__cell">{bug.description}</td>
        <td className="table__cell">{bug.priority}</td>
        <td className="table__cell">
          <span className="btn-wrapper">
            {!props.resolved && (
              <button
                className="btn btn--secondary"
                onClick={() => resolvedPressed(bug)}
              >
                Resolved
              </button>
            )}
            {!props.resolved && (
              <button
                className="btn btn--danger"
                onClick={() => deletePressed(bug.id)}
              >
                Delete
              </button>
            )}
          </span>
        </td>
      </tr>
    ));
  }

  return (
    <article className="table-container">
      <table className="table">
        <thead className="table__head">
          <tr className="table__header-row">
            <th>Description</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableBodyContent}</tbody>
      </table>
    </article>
  );
};

export default BugListTable;
