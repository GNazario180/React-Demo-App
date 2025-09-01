import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Detail from './pages/Detail';

function App() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={isLoggedIn ? <Main /> : <Navigate to="/" />} />
        <Route path="/detail/:id" element={isLoggedIn ? <Detail /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;