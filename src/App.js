import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import StyledHeader from "./Header/styled";
import Section from "./Section";
import GlobalStyles from "./GlobalStyles/globalStyles";
import { useState } from "react";
import { useTasks } from "./useTasks/useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const { tasks, removeTask, toggleTaskDone, markAllDone, addNewTask } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <main>
      <GlobalStyles />
      <StyledHeader>Lista zadań</StyledHeader>
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
