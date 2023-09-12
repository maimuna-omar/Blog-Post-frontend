import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/index.css';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute'; // Import the ProtectedRoute component
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-blue-100">
      <div className="flex justify-center items-center bg-blue-400 text-white w-full py-3">
        <h1 className="text-5xl font-bold">FREE MIND BLOG</h1>
      </div>
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />}  />
          <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<Register />}  />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
               } 
               />
        </Routes>
      </div>
    </div>
  );
}

export default App;
