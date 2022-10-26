import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <span className="container__buttons--items">
            <button className={`${!tasks.length ? "taskButton--hidden" : "taskButton"}`}>
                {!hideDoneTasks ? "Ukryj" : "Pokaż"} ukończone
            </button>

            <button
                className={`${!tasks.length ? "taskButton--hidden" : "taskButton"}`}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </span>
    )
);

export default Buttons;