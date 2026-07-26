import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import TaskApp from '../pages/TaskApp/TaskApp';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Privacy from '../pages/Legal/Privacy';
import Terms from '../pages/Legal/Terms';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

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
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
