import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 via-amber-50 to-stone-100 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating jewelry particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-amber-400 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            willChange: 'transform',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Luxury glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-300 rounded-full blur-xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-300 rounded-full blur-xl opacity-20"
        animate={{
          scale: [1, 1.4, 1],
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Decorative top element */}
        <motion.div
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
        >
          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="mx-4 w-6 h-6 text-amber-600" />
          </motion.div>
          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-7xl md:text-9xl font-serif mb-6 tracking-wide relative"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {/* Letter-by-letter animation */}
            {['A', 'U', 'R', 'E', 'L', 'I', 'A'].map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                style={{
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              >
                {letter}
              </motion.span>
            ))}
            
            {/* Shimmer effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              animate={{
                opacity: [0, 0.3, 0],
                x: ['-100%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{ 
                mixBlendMode: 'overlay',
                pointerEvents: 'none',
              }}
            />
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-stone-600 mb-12 italic font-light relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
        >
          <motion.span
            className="inline-block"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Where Elegance Meets Insight.
          </motion.span>
          
          {/* Underline decoration */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"
            initial={{ width: 0 }}
            animate={{ width: '60%' }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
        >
          <motion.button
            className="px-10 py-5 bg-stone-900 text-amber-50 rounded-sm font-light tracking-wider relative overflow-hidden group"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            <span className="relative z-10">Explore Collection</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button sparkle effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: '50%',
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              ))}
            </motion.div>
          </motion.button>

          <motion.button
            className="px-10 py-5 border-2 border-stone-900 text-stone-900 rounded-sm font-light tracking-wider relative overflow-hidden group bg-transparent"
            whileHover={{ 
              scale: 1.08, 
              y: -4,
              boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
              borderColor: '#d4af37',
              color: '#d4af37',
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <span className="relative z-10">Discover Craftsmanship</span>
            
            {/* Hover fill effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-amber-50 to-yellow-50 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Additional tagline */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3 text-stone-500 text-sm tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            className="w-8 h-px bg-stone-400"
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.8, delay: 2 }}
          />
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            CRAFTED WITH PASSION
          </motion.span>
          <motion.div
            className="w-8 h-px bg-stone-400"
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.8, delay: 2 }}
          />
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center relative group">
            <motion.div
              className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 border-2 border-amber-600 rounded-full opacity-0 group-hover:opacity-50"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
        <p className="text-xs text-stone-400 mt-3 tracking-wider">SCROLL</p>
      </motion.div>
    </section>
  );
};

export default Hero;
