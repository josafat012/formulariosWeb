import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Registro from '../pages/Registro';

function App() {
  return ( 
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/registro' element={<Registro/>}></Route>
        </Routes>
    </BrowserRouter>
   );
}

export default App;
