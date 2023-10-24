import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderBar from "./layout/HeaderBar";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./layout/SideBar";
import FormHotels from './components/FormHotels';
import FormEditHotels from './components/FormEditHotels';
import Redux1 from './components/Redux1';
import Redux2 from './components/Redux2';
import Register from './components/pages/admin/user/authen/Register';

function App() {
  // javascript

  return (
    <BrowserRouter>
      <>
        <CssBaseline />
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
        <div className="app">
          <SideBar />
          <main className="content">
            <HeaderBar />
            <div className="content_body">
              <Box m="20px">
                <Routes>
                  <Route path='/admin/viewtable' element={<FormHotels />} />
                  <Route path='/edit/:id' element={<FormEditHotels />} />

                </Routes>
              </Box>

            </div>
          </main>
        </div>
      </>
      {/* <Redux1/>
      <hr/>
      <Redux2/> */}
    </BrowserRouter>
  );
}

export default App;
