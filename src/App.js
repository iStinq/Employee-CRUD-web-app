import './App.css';
import { CreateEmployee } from './Components/CreateEmployee';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { ListEmployee } from './Components/ListEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UpdateEmployee } from './Components/UpdateEmployee';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ListEmployee />}/>
          <Route path='/employees' element={<ListEmployee />}/>
          <Route path='/add-employee' element={<CreateEmployee />}/>
          <Route path='/update-employee/:id' element={<UpdateEmployee />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
