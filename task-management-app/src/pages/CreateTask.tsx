// Folder: src/pages/CreateTask.tsx

import React from "react"; // Import React so JSX works
import TaskForm from "../components/TaskForm"; // Import the form component

// This component renders the form to create a new task
const CreateTask: React.FC = () => {
  return (
    <div>
      <h2>Create a New Task</h2>
      <TaskForm /> {/* No props needed since it's a new task */}
    </div>
  );
};

export default CreateTask;
