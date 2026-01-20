import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SignatureCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const signature = [
    { name: 'Eternal Radiance', description: 'Platinum & Diamond Masterpiece', price: '$48,000', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop' },
    { name: 'Celestial Dreams', description: 'Sapphire & White Gold', price: '$35,000', image: '/Bracelet.png' },
    { name: 'Royal Heritage', description: 'Ruby & Yellow Gold Collection', price: '$52,000', image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop' },
  ];

  return (
    <section ref={ref} className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Dramatic background elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-amber-200 to-transparent rounded-full blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-yellow-200 to-transparent rounded-full blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-20 relative z-10"
      >
        {/* Crown icon */}
        <motion.div
          className="inline-block mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <svg className="w-16 h-16 mx-auto text-amber-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15 8L21 9L16.5 13L18 19L12 16L6 19L7.5 13L3 9L9 8L12 2Z" />
          </svg>
        </motion.div>

        <motion.h2 
          className="text-6xl font-serif mb-6" 
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ letterSpacing: '0.5em', opacity: 0 }}
          animate={isInView ? { letterSpacing: '0.05em', opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Signature Collection
        </motion.h2>

        {/* Animated decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.div
            className="h-px bg-gradient-to-r from-transparent to-amber-600"
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={isInView ? { scale: 1, rotate: 360 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Sparkles className="w-5 h-5 text-amber-600" />
          </motion.div>
          <motion.div
            className="h-px bg-gradient-to-l from-transparent to-amber-600"
            initial={{ width: 0 }}
            animate={isInView ? { width: 120 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </div>

        <p className="text-stone-600 text-xl font-light">Our most exquisite creations</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        {signature.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ 
              duration: 1, 
              delay: index * 0.2,
              type: 'spring',
              stiffness: 100,
            }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <motion.div
              className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-xl relative"
              animate={activeIndex === index ? {
                y: -20,
                boxShadow: '0 40px 80px rgba(212, 175, 55, 0.4)',
              } : {
                y: 0,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 rounded-sm opacity-0 blur-md"
                animate={activeIndex === index ? { opacity: 0.5 } : { opacity: 0 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative overflow-hidden aspect-square">
                {/* Radial shine effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
                  }}
                  animate={activeIndex === index ? {
                    scale: [0, 2.5],
                    opacity: [0.8, 0],
                  } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />

                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover relative"
                  animate={activeIndex === index ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />

                {/* Particle effects */}
                {activeIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                          willChange: 'transform',
                        }}
                        initial={{ scale: 0, x: 0, y: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          x: Math.cos((i * 60) * Math.PI / 180) * 100,
                          y: Math.sin((i * 60) * Math.PI / 180) * 100,
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.05,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Animated border frame */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={activeIndex === index ? { opacity: 1 } : { opacity: 0 }}
                >
                  {/* Top border */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-amber-600 to-yellow-500"
                    initial={{ width: 0 }}
                    animate={activeIndex === index ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Right border */}
                  <motion.div
                    className="absolute top-0 right-0 w-1 bg-gradient-to-b from-yellow-500 to-amber-600"
                    initial={{ height: 0 }}
                    animate={activeIndex === index ? { height: '100%' } : { height: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                  {/* Bottom border */}
                  <motion.div
                    className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-amber-600 to-yellow-500"
                    initial={{ width: 0 }}
                    animate={activeIndex === index ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                  {/* Left border */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-1 bg-gradient-to-t from-yellow-500 to-amber-600"
                    initial={{ height: 0 }}
                    animate={activeIndex === index ? { height: '100%' } : { height: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  />
                </motion.div>

                {/* Premium badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-stone-900 text-amber-400 px-4 py-2 rounded-full text-xs tracking-widest flex items-center gap-2"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={activeIndex === index ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                >
                  <Sparkles className="w-3 h-3" />
                  SIGNATURE
                </motion.div>

                {/* Explore overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-transparent flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={activeIndex === index ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-sm text-sm tracking-widest font-medium"
                    initial={{ y: 20, opacity: 0 }}
                    animate={activeIndex === index ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    EXPLORE
                  </motion.button>
                </motion.div>
              </div>
              
              <motion.div 
                className="p-8 text-center relative bg-white"
                animate={activeIndex === index ? {
                  backgroundColor: '#fafaf9',
                } : {}}
              >
                <motion.h3 
                  className="text-2xl font-serif mb-2"
                  animate={activeIndex === index ? {
                    color: '#d4af37',
                    scale: 1.05,
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.h3>
                <p className="text-stone-600 mb-4 font-light">{item.description}</p>
                <motion.p 
                  className="text-amber-700 font-light text-2xl"
                  animate={activeIndex === index ? {
                    scale: 1.15,
                    fontWeight: 600,
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {item.price}
                </motion.p>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={activeIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SignatureCollection;
