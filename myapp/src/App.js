import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/profile';
import SignUp from './pages/signup';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
