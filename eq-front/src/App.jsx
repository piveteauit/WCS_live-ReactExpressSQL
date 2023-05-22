import './App.css';
import { HomeScreen, UsersScreen, UserScreen } from './Screens';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = '/api/'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='users' element={<UsersScreen />} />
          <Route path='users/:user_id' element={<UserScreen />} />

          <Route path='*' element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
