import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const VisualHighlight = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-stone-900">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&h=900&fit=crop"
            alt="Luxury jewelry showcase"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-900/50 to-stone-900" />
        </div>
      </motion.div>
      
      <motion.div
        className="relative z-10 h-full flex items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        <div className="text-amber-50 max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-serif mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Crafted to Perfection
          </h2>
          <p className="text-xl font-light text-stone-300">
            Every detail matters. Every stone is chosen with care. Every piece is a work of art.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default VisualHighlight;
