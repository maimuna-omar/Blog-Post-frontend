import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token');

  if (isAuthenticated) {
    return children;
  } else {
    // Redirect to the login page or another fallback
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
