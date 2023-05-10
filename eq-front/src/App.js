import './App.css';
import { UsersScreen } from './Screens/Users';
import { UserScreen } from './Screens/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='users' element={<UsersScreen />} />
          <Route path='users/:user_id' element={<UserScreen />} />

          <Route path='*' element={<UsersScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
