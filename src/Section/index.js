import "./style.css";

const Section = ({ title, body, extraContent }) => (
    <section className="section">
        <header className="section__header">
            <h2 className="section__header--title">{title}</h2>
            {extraContent}
        </header>
        {body}
    </section>
);

export default Section;