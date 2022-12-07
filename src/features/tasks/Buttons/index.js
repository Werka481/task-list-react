import { useDispatch, useSelector } from "react-redux";
import { toggleHideDone, markAllDone, selectAllTaskDone, selectAreTasksEmpty, selectHideDone } from "../tasksSlice";
import { Button, Wrapper } from "./styled";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const allTaskDone = useSelector(selectAllTaskDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            {!areTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {!hideDone ? "Ukryj" : "Pokaż"} ukończone
                    </Button>

                    <Button
                        disabled={allTaskDone}
                        onClick={() => dispatch(markAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    );
};

export default Buttons;