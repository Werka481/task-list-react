import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import StyledHeader from "../../common/Header/styled";
import Section from "../../common/Section";
import GlobalStyles from "../../globalStyles";
import { useState } from "react";
import { useTasks } from "../../useTasks/useTasks";

function Tasks() {
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
          <TasksList
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
    </main>
  )
};

export default Tasks;
