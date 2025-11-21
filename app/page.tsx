import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FocusAreas } from './components/FocusAreas';
import { Objectives } from './components/Objectives';
import { Programs } from './components/Programs';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <FocusAreas />
      <Objectives />
      <Programs />
      <CallToAction />
      <Footer />
    </div>
  );
}
