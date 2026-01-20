import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AboutAurelia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 px-6 bg-stone-900 text-amber-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Sparkles className="w-12 h-12 mx-auto mb-8 text-amber-500" />
          <h2 className="text-5xl font-serif mb-8" style={{ fontFamily: 'Georgia, serif' }}>
            About Aurelia
          </h2>
          <p className="text-lg font-light leading-relaxed mb-6 text-stone-300">
            For over three decades, Aurelia has been synonymous with exceptional craftsmanship 
            and timeless elegance. Each piece in our collection tells a story of artistry, 
            precision, and passion.
          </p>
          <p className="text-lg font-light leading-relaxed text-stone-300">
            From ethically sourced gemstones to meticulously crafted settings, we believe that 
            luxury is not just about beauty—it's about integrity, heritage, and the profound 
            moments our jewelry helps commemorate.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAurelia;
