import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { List, Item, Content, DoneButton, RemoveButton, StyledNavLink } from "./styled";

const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <DoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </DoneButton>
                    <Content done={task.done}>
                        <StyledNavLink to={`/zadania/${task.id}`}>{task.content}</StyledNavLink>
                    </Content>
                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑️
                    </RemoveButton>
                </Item>
            ))}
        </List>
    )
};

export default TasksList;