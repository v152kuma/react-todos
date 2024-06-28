function TodoRowItem(props) {
  return (
    <tr>
      <th scope='row'>{props.index}</th>
      <td>{props.work}</td>
      <td>{props.assignedTo}</td>
    </tr>
  );
}

export default TodoRowItem;