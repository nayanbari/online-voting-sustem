import './App.css';
import HomePage from './Components/HomePage';
import SignUpPage from './Components/SignUpPage';
import VotePage from './Components/VotePage';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
    <>
      <Routes>
      <Route path='/' exact element={<SignUpPage/>} />
      <Route path='/elections' exact element={<HomePage/>} />
      <Route path='/vote/:id' exact element={<VotePage/>} />
      </Routes>
    </>
    </Router>

  );
}

export default App;
