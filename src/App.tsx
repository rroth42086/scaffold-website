import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppIcons from './components/AppIcons';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <AppIcons />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
