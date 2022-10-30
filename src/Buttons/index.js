import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button className={`${!tasks.length ? "buttons__button--hidden" : "buttons__button"}`}>
                {!hideDoneTasks ? "Ukryj" : "Pokaż"} ukończone
            </button>

            <button
                className={`${!tasks.length ? "buttons__button--hidden" : "buttons__button"}`}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);

export default Buttons;