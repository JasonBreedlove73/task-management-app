// Folder: src/components/TaskList.tsx
import { useTasks } from "../context/useTasks";
import { Link } from "react-router-dom";
import type { Task } from "../types/task";

function TaskList() {
  const { tasks, deleteTask } = useTasks();

  return (
    <div>
      <h2>Task List</h2>
      <Link to="/task/new">Add Task</Link>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
