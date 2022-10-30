import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, markAllDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button
                onClick={toggleHideDone}
                className={`${!tasks.length ? "buttons__button--hidden" : "buttons__button"}`}
            >
                {!hideDone ? "Ukryj" : "Pokaż"} ukończone
            </button>

            <button
                className={`${!tasks.length ? "buttons__button--hidden" : "buttons__button"}`}
                disabled={tasks.every(({ done }) => done)}
                onClick={markAllDone}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;