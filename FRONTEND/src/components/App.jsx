import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import TaskApp from '../pages/TaskApp/TaskApp';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <TaskApp />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
