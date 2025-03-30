import './App.css';
import NavBar from './Components/NavBar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </> 
  );
}

export default App;
