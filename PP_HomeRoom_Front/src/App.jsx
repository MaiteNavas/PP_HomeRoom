import './App.css';
import Router from './config/Router';
import NavBarAdmin from './components/navBarAdmin/NavBarAdmin';
 function App() {

  return (
    <>
        <div>
        <NavBarAdmin></NavBarAdmin>
        <Router/>
      </div>
    
    </>

  )
}
export default App