import React, { useState, useEffect } from "react";
import { useTasks } from "../context/useTasks";
import { useNavigate } from "react-router-dom";
import type { Task } from "../types/task";

type TaskFormProps = {
  initialData?: Task;
  isEditing?: boolean;
};

// Helper function to generate a random id string
function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

function TaskForm({ initialData, isEditing = false }: TaskFormProps) {
  // Set initial task state: either editing existing or new with generated ID
  const [task, setTask] = useState<Task>({
    id: generateRandomId(),
    title: "",
    description: "",
    status: "pending",
  });

  const { addTask, updateTask } = useTasks();
  const navigate = useNavigate();

  // If initialData changes, update the task state
  useEffect(() => {
    if (initialData) {
      setTask(initialData);
    }
  }, [initialData]);

  // Handle form submission for add or update
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEditing) {
      updateTask(task);
    } else {
      addTask(task);
    }

    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        />
      </label>
      <br />
      <label>
        Status:
        <select
          value={task.status}
          onChange={(e) =>
            setTask({
              ...task,
              status: e.target.value as Task["status"], // cast to status type
            })
          }
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>
      <br />
      <button type="submit">{isEditing ? "Update" : "Add"} Task</button>
    </form>
  );
}

export default TaskForm;
