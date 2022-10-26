import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li className={`container2__item ${task.done && props.hideDoneTasks ? "list--hidden" : ""}`}
                key={task.id}
            >
                <button className="button button--done">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`list__item ${task.done ? "list__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="button button--remove">🗑️</button>
            </li>
        ))}
    </ul >
);

export default Tasks;