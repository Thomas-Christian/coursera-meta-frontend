import './App.css';
import CallToAction from './components/CallToAction';
import Nav from './components/Nav';
import Confirmed from './components/Confirm';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <Main> </Main> */}
       
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path="/booking" element={<BookingPage />}> </Route>
          <Route path="/confirmed" element={<Confirmed />}> </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
