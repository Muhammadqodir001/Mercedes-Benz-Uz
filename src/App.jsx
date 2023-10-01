import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Vehicle from "./components/Vehicle";
import Contact from './components/Contact'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Home />
      <Vehicle />
      <Contact />
      <Footer />
 </div>
     
  )
}

export default App;

