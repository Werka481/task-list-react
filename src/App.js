import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import { useState } from "react";


const tasks = [
  { id: 1, content: "zrobić zakupy", done: false },
  { id: 2, content: "posprzątać dom", done: true },
];


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "zrobić zakupy", done: false },
    { id: 2, content: "posprzątać dom", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }))
  };

  const markAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true
    })))
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />}
        extraContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllDone={markAllDone}
          />}
      />
    </Container>
  )
};

export default App;
