import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleTaskDone, removeTask, selectHideDone, selectTaskByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, Content, DoneButton, RemoveButton, StyledNavLink } from "./styled";

const TasksList = () => {
    const hideDone = useSelector(selectHideDone);

    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
    const tasks = useSelector(state => selectTaskByQuery(state, query));

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