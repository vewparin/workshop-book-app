import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import FormHotels from './components/FormHotels';
import FormEditHotels from './components/FormEditHotels';

function App() {
  // javascript

  return (
    <BrowserRouter>
      <div>
        {/* HTML */}
        <h1>Form CRUD</h1>


        <Routes>
          <Route path='/' element={<FormHotels />} />
          <Route path='/edit/:id' element={<FormEditHotels />} />
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
