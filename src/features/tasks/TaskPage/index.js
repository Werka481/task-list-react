import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StyledHeader from "../../../common/Header/styled";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";
import { Wrapper } from "./styled";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <main>
            <StyledHeader>Szczegóły zadania</StyledHeader>
            <Section
                title={task ? task.content : "Nie znaleziono zadania😟"}
                body={!!task && (
                    <Wrapper><strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}</Wrapper>
                )}
            />
        </main>
    )
};

export default TaskPage;