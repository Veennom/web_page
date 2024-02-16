import './App.css';
import { Home } from './Pages/Home';
import { Galery } from './Pages/Galery';
import NavBar from './Components/NavBar';
import { HeroSection } from './Pages/HeroSection';

function App() {
  return (
    <div className='App'>
      <NavBar />
      {/* hello */}
      {/* <HeroSection /> */}
      <Home />
      <Galery />
    </div>
  );
}

export default App;
