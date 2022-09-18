import './App.css';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/homePage';
import PostDetailPage from './pages/postDetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<PostDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
