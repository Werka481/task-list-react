import "./style.css";

const Form = () => (
    <form className="form container1__item">
        <input className="form__input" name="task" placeholder="Co jest do zrobienia?" autofocus />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;