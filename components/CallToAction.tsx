import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 2px, transparent 2px)',
          backgroundSize: '60px 60px',
        }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-5xl md:text-6xl font-serif mb-8" style={{ fontFamily: 'Georgia, serif' }}>
          Timeless Jewelry, Crafted for You
        </h2>
        <p className="text-xl text-stone-600 mb-12 font-light">
          Begin your journey into elegance. Explore our collections and find the piece that speaks to your soul.
        </p>
        <motion.button
          className="px-12 py-5 bg-stone-900 text-amber-50 rounded-sm font-light tracking-widest text-lg relative overflow-hidden group"
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10">Discover Aurelia</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default CallToAction;
