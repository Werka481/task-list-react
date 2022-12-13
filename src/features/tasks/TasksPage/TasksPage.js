import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import StyledHeader from "../../../common/Header/styled";
import Section from "../../../common/Section";
import ExampleTasksButton from "./ExampleTasksButton";
import Search from "./Search";
import StyledContainer from "../../../common/Container/styled";

function TasksPage() {
  return (
    <StyledContainer>
      <StyledHeader>Lista zadań</StyledHeader>
      <Section
        title="Dodaj nowe zadanie"
        extraContent={<ExampleTasksButton />}
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList />}
        extraContent={
          <Buttons />}
      />
    </StyledContainer>
  )
};

export default TasksPage;
