import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { FocusAreas } from '../components/FocusAreas';
import { Objectives } from '../components/Objectives';
import { Programs } from '../components/Programs';
import { LatestNews } from '../components/LatestNews';
import { LatestProjects } from '../components/LatestProjects';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero imageSrc="/IMG_20251231_215928_311.jpg" imageAlt="Hero background image" />
      <About />
      <LatestNews />
      <FocusAreas /> 
      <LatestProjects />
      <Programs />
      <Objectives />
      <CallToAction />
      <Footer />
    </div>
  );
}

