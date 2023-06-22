import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import the CSS file

import Homepage from './Pages/Home';
import EditPage from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>MemeMazaa</h1> 
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/edit' element={<EditPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
