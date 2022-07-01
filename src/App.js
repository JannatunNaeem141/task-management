import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import ToDo from './ToDo/ToDo';
import Completed from './Completed/Completed';
import Calender from './Calender/Calender';
import Footer from './Shared/Footer';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<ToDo></ToDo>}></Route>
        <Route path='/completed' element={<Completed></Completed>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
