import logo from './logo.svg';
import './App.css';
import Countries from './Countries';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='border m-2 p-2'>
      <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/countries">Countries</Link>&nbsp;&nbsp;&nbsp;
      <Outlet></Outlet>
    </div>
  );
}

export default App;
