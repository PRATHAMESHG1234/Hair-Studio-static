import './App.css';
import Home from './components/Home';
import Features from './components/Features';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <section id='banner'>
        <Home />
      </section>
      <section id='features'>
        <Features />
      </section>
      <section id='service'>
        <Service />
      </section>
      <section id='testimonial'>
        <Testimonial />
      </section>
      <section id='footer'>
        <Footer />
      </section>
    </>
  );
}

export default App;
