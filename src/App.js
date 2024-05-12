import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Feature from './components/Feature';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
