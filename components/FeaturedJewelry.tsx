import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const FeaturedJewelry = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    { name: 'Diamond Solitaire Ring', price: '$12,500', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop' },
    { name: 'Sapphire Pendant', price: '$8,900', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop' },
    { name: 'Pearl Earrings', price: '$6,200', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=500&fit=crop' },
    { name: 'Gold Bracelet', price: '$4,800', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop' },
    { name: 'Emerald Ring', price: '$15,600', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop' },
    { name: 'Ruby Necklace', price: '$18,900', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=500&fit=crop' },
  ];

  return (
    <section ref={ref} className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Animated background accent */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Sparkles className="w-10 h-10 mx-auto mb-4 text-amber-600" />
        </motion.div>
        <h2 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Featured Collection
        </h2>
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-4"
          initial={{ width: 0 }}
          animate={isInView ? { width: 96 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <p className="text-stone-600 text-lg font-light">Curated pieces of timeless beauty</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, rotateX: -15 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="group cursor-pointer bg-white rounded-sm overflow-hidden shadow-md relative"
              whileHover={{ 
                y: -12,
                boxShadow: '0 25px 50px rgba(212, 175, 55, 0.25)',
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="relative overflow-hidden aspect-square">
                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 pointer-events-none"
                  animate={hoveredIndex === index ? {
                    opacity: [0, 0.3, 0],
                    x: ['-100%', '100%'],
                  } : {}}
                  transition={{ duration: 1 }}
                  style={{ transform: 'skewX(-20deg)' }}
                />
                
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 border-amber-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={hoveredIndex === index ? { 
                    opacity: [0, 1, 1, 0],
                    scale: [0.9, 1, 1, 1.05],
                  } : { opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Corner sparkles */}
                {hoveredIndex === index && (
                  <>
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2"
                        style={{
                          top: i < 2 ? '10px' : 'auto',
                          bottom: i >= 2 ? '10px' : 'auto',
                          left: i % 2 === 0 ? '10px' : 'auto',
                          right: i % 2 === 1 ? '10px' : 'auto',
                        }}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{ 
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{ 
                          duration: 0.6,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                      >
                        <Sparkles className="w-full h-full text-amber-400" />
                      </motion.div>
                    ))}
                  </>
                )}

                {/* View Details overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/50 to-transparent flex items-end justify-center pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    className="px-6 py-2 border border-amber-500 text-amber-400 rounded-sm text-sm tracking-wider"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(212, 175, 55, 0.1)' }}
                  >
                    VIEW DETAILS
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="p-6 text-center relative">
                <motion.h3 
                  className="text-xl font-serif mb-2"
                  animate={hoveredIndex === index ? { color: '#d4af37' } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {product.name}
                </motion.h3>
                <motion.p 
                  className="text-amber-700 font-light text-lg"
                  animate={hoveredIndex === index ? { 
                    scale: 1.1,
                    fontWeight: 500,
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {product.price}
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJewelry;
