const BugListTable = (props) => {
  const { bugList, onDeleteBug } = props;

  console.log("In bug list table");
  console.log(bugList);

  const resolvedPressed = (id) => {
    onDeleteBug(id);
  };

  let tableBodyContent = (
    <tr>
      <td>No bugs found.</td>
    </tr>
  );

  if (bugList.length > 0) {
    tableBodyContent = bugList.map((bug) => (
      <tr key={bug.id}>
        <td>{bug.description}</td>
        <td>{bug.priority}</td>
        <td>
          <button onClick={() => resolvedPressed(bug.id)}>Resolved</button>
        </td>
      </tr>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Priority</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{tableBodyContent}</tbody>
    </table>
  );
};

export default BugListTable;
