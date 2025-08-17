import './App.css'
import Navbar from "./components/Nabvar";
import About from "./components/About";
import Videos from "./components/Videos";
import Tecnologias from "./components/Tecnologias";
import Repos from "./components/Repos";
import Footer from "./components/Footer";
import Acreditaciones from './components/Acreditaciones';

export default function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Tecnologias />
      <Acreditaciones />
      <Videos />   
      <Repos />
      <Footer />
     
    </div>
  );
}
