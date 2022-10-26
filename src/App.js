import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import Body from "./Body";


const tasks = [
  { id: 1, content: "zrobić zakupy", done: false },
  { id: 2, content: "posprzątać dom", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <Body>
      <Header title="Lista zadań" />
      <Container
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Container
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Body>
  )
};

export default App;
