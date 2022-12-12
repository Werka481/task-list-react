import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { fetchExampleTasks, selectLoadingStatus} from "../../tasksSlice";

const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loadingStatus = useSelector(selectLoadingStatus);

    return (
        <Button disabled={loadingStatus} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loadingStatus === true ? "Ładowanie..." : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};

export default ExampleTasksButton;
