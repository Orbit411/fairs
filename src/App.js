import logo from './logo.svg';
import './App.css';
import Nav from './comp/nav';
import Hero from './comp/Hero/Hero';
import Slider from './comp/slider/slider';
import Services from './comp/Services/services';


function App() {
  return (
<div className="container no">
  <Nav/>
  <Hero/>
  <Slider/>
  <Services/>

</div>
  );
}

export default App;
