import './App.css';
import CallToAction from './components/CallToAction';
import Nav from './components/Nav';
import Confirmed from './components/Confirm';
import BookingPage from './components/BookingPage';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Main from './components/Main';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

function App() {
  return (
    <>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Nav />
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path="/booking" element={<Main />}> </Route>
          <Route path="/confirmed" element={<Confirmed />}> </Route>
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
