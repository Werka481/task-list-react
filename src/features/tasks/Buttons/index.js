import { Button, Wrapper } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllDone }) => (
    tasks.length > 0 && (
        <Wrapper>
            <Button
                onClick={toggleHideDone}
                hidden={!tasks.length}
            >
                {!hideDone ? "Ukryj" : "Pokaż"} ukończone
            </Button>

            <Button
                hidden={!tasks.length}
                disabled={tasks.every(({ done }) => done)}
                onClick={markAllDone}
            >
                Ukończ wszystkie
            </Button>
        </Wrapper>
    )
);

export default Buttons;