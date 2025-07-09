import { useParams } from "react-router-dom";
import { useTasks } from "../context/useTasks"; // Import from the hook file
import TaskForm from "../components/TaskForm";
import type { Task } from "../types/task";

function EditTask() {
  const { id } = useParams<{ id: string }>(); // Type the route param
  const { tasks } = useTasks();

  // Find the task with matching id
  const task = tasks.find((t: Task) => t.id === id);

  if (!task) return <div>Task not found</div>;

  return <TaskForm initialData={task} isEditing={true} />;
}

export default EditTask;
