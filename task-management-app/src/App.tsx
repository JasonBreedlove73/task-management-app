import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Dashboard - Show list of tasks */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <TaskList />
            </ProtectedRoute>
          }
        />

        {/* Create New Task */}
        <Route
          path="/task/new"
          element={
            <ProtectedRoute>
              <CreateTask />
            </ProtectedRoute>
          }
        />

        {/* View Task Details */}
        <Route
          path="/task/:id"
          element={
            <ProtectedRoute>
              <TaskDetails />
            </ProtectedRoute>
          }
        />

        {/* Edit Existing Task */}
        <Route
          path="/task/edit/:id"
          element={
            <ProtectedRoute>
              <EditTask />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;



