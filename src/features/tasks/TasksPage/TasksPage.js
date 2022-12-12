import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import StyledHeader from "../../../common/Header/styled";
import Section from "../../../common/Section";
import ExampleTasksButton from "./ExampleTasksButton";

function TasksPage() {
  return (
    <main>
      <StyledHeader>Lista zadań</StyledHeader>
      <Section
        title="Dodaj nowe zadanie"
        extraContent={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList />}
        extraContent={
          <Buttons />}
      />
    </main>
  )
};

export default TasksPage;
