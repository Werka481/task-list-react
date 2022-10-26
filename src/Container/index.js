import "./style.css";

const Container = ({ title, body, extraContent }) => (
    <div className="container2">
        <p className="paragraph container__buttons">
            {title}
            {extraContent}
        </p>
        {body}
    </div>
);

export default Container;