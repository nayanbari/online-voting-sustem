import './App.css';
import HomePage from './Components/HomePage';
import SignUpPage from './Components/SignUpPage';
import VotePage from './Components/VotePage';
import Result from './Components/Result';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignInPage from './Components/SignInPage';


function App() {
  return (
    <Router>
    <>
      <Routes>
      <Route path='/' exact element={<HomePage/>} />
      <Route path='/signin' exact element={<SignUpPage/>} />
      <Route path='/signup' exact element={<SignInPage/>} />
      <Route path='/vote/:id' exact element={<VotePage/>} />
      <Route path='/result' exact element={<Result/>} />
      </Routes>
    </>
    </Router>

  );
}

export default App;
