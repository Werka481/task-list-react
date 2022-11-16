import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import { useState } from "react";
import { useTasks } from "./useTasks/useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const { tasks, removeTask, toggleTaskDone, markAllDone, addNewTask } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
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
