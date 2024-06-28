
import TodoRowItem from "./TodoRowItem";
function TodoTable(props) {

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope='col'>Index</th>
                    <th scope='col'>Work</th>
                    <th scope='col'>Assigned to</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map((todo) => (
                    <TodoRowItem
                        key={todo.index}
                        index={todo.index}
                        work={todo.work}
                        assignedTo={todo.assignedTo}
                        deleteTodo={props.deleteTodo}
                    />
                ))}
            </tbody>
        </table>
    );

}

export default TodoTable;