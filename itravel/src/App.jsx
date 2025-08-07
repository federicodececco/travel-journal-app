import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';
import DefaultLayout from './Layout/DefaultLayout';
import HomePage from './pages/HomePage';
import MyTravels from './pages/MyTravels';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/viaggi' element={<MyTravels />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
