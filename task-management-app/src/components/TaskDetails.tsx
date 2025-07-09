import { useParams, Link } from "react-router-dom";
import { useTasks } from "../context/useTasks";
import type { Task } from "../types/task";

function TaskDetails() {
  const { id } = useParams<{ id: string }>(); // Tell TS id is a string
  const { tasks } = useTasks();

  // Find the task matching the URL param id
  const task = tasks.find((t: Task) => t.id === id);

  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <Link to={`/task/edit/${task.id}`}>Edit</Link>
    </div>
  );
}

export default TaskDetails;
