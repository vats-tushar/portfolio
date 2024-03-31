import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoreProjects from './components/MoreProjects';
import VidEdits from './components/VidEdits';
function App() {

  return (
    <div>
      <Router basename='/portfolio'>
        <Routes>
          <Route exact path='/' element={<MainPage/>}></Route>
          <Route exact path='/moreprojects' element={<MoreProjects/>}></Route>
          <Route exact path='/edits' element={<VidEdits/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;