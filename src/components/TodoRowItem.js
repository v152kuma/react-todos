function TodoRowItem(props) {
  return (
    <tr onClick={() => props.deleteTodo(props.index)}>
      <th scope='row'>{props.index}</th>
      <td>{props.work}</td>
      <td>{props.assignedTo}</td>
    </tr>
  );
}

export default TodoRowItem;