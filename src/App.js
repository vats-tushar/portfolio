import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoreProjects from './components/MoreProjects';
function App() {

  return (
    <div>
      <Router basename='/portfolio'>
        <Routes>
          <Route exact path='/' element={<MainPage/>}></Route>
          <Route exact path='/moreprojects' element={<MoreProjects/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;
