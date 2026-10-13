import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const Home = lazy(() => import('./routes/Home'));
const Services = lazy(() => import('./routes/Services'));
const TreeRemoval = lazy(() => import('./routes/TreeRemoval'));
const TreePruning = lazy(() => import('./routes/TreePruning'));
const StumpGrinding = lazy(() => import('./routes/StumpGrinding'));
const Emergency = lazy(() => import('./routes/Emergency'));
const LandClearing = lazy(() => import('./routes/LandClearing'));
const TreeHealth = lazy(() => import('./routes/TreeHealth'));
const Gallery = lazy(() => import('./routes/Gallery'));
const About = lazy(() => import('./routes/About'));
const ServiceAreas = lazy(() => import('./routes/ServiceAreas'));
const Contact = lazy(() => import('./routes/Contact'));

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tree-removal" element={<TreeRemoval />} />
            <Route path="/tree-pruning" element={<TreePruning />} />
            <Route path="/stump-grinding" element={<StumpGrinding />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/land-clearing" element={<LandClearing />} />
            <Route path="/tree-health" element={<TreeHealth />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
