import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Student from './components/Student';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/students" element={<Student />}></Route>
    </Routes>
   </>
  );
}

export default App;
