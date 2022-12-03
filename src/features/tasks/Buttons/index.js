import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleHideDone, markAllDone } from "../tasksSlice";
import { Button, Wrapper } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <Wrapper>
                <Button
                    onClick={() => dispatch(toggleHideDone())}
                    hidden={!tasks.length}
                >
                    {!hideDone ? "Ukryj" : "Pokaż"} ukończone
                </Button>

                <Button
                    hidden={!tasks.length}
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(markAllDone())}
                >
                    Ukończ wszystkie
                </Button>
            </Wrapper>
        )
    );
};

export default Buttons;