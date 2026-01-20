import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Animated background shimmer */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle, #d4af37 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 text-center">
        {/* Brand name with elegant reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 
            className="text-7xl md:text-8xl font-serif mb-8 tracking-wide text-amber-50"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              AURELIA
            </motion.span>
          </h1>
        </motion.div>

        {/* Elegant diamond/jewelry icon animation */}
        <motion.div
          className="relative w-16 h-16 mx-auto mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M50 10 L70 40 L50 90 L30 40 Z"
                fill="none"
                stroke="#d4af37"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <motion.path
                d="M30 40 L70 40"
                stroke="#d4af37"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </svg>
          </motion.div>
          
          {/* Sparkle effects */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                scale: [0, 1, 0],
                x: [0, (i % 2 === 0 ? 30 : -30) * Math.cos(i * Math.PI / 2)],
                y: [0, (i % 2 === 0 ? 30 : -30) * Math.sin(i * Math.PI / 2)],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Loading text */}
        <motion.p
          className="text-stone-400 text-sm tracking-widest font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          LOADING ELEGANCE
        </motion.p>

        {/* Progress bar */}
        <motion.div
          className="w-64 h-px bg-stone-700 mx-auto mt-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ width: '50%' }}
          />
        </motion.div>
      </div>

      {/* Corner decorative elements */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-amber-600 opacity-30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-amber-600 opacity-30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
