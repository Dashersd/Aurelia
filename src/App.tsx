import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';
import FeaturedJewelry from '../components/FeaturedJewelry';
import AboutAurelia from '../components/AboutAurelia';
import SignatureCollection from '../components/SignatureCollection';
import VisualHighlight from '../components/VisualHighlight';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div 
          className="bg-stone-50 text-stone-900 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <FeaturedJewelry />
          <AboutAurelia />
          <SignatureCollection />
          <VisualHighlight />
          <CallToAction />
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default App;
