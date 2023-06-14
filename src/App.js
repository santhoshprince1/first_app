import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import About from './components/about/About';
import { Routes, Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <Navigation></Navigation>
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/dashboard' element ={<Dashboard/>}/>
    </Routes>
    </div>
  );
}

export default App;
