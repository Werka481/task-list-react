export const getExampleTasks = async () => {
    try {
        const response = await fetch("/task-list-react/exampleTasks.json");

        if (!response.ok) {
            new Error(response.statusText);
        };

        return await response.json();

    } catch (error) {
        alert("Nie udało sie pobrać danych. Spróbuj później");
    };
};


