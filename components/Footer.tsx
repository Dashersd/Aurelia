import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-amber-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-serif mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            AURELIA
          </h3>
          <p className="text-stone-400 italic font-light">Where Elegance Meets Insight.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <nav className="flex gap-8 text-stone-400">
            <a href="#" className="hover:text-amber-500 transition-colors font-light">Collections</a>
            <a href="#" className="hover:text-amber-500 transition-colors font-light">About</a>
            <a href="#" className="hover:text-amber-500 transition-colors font-light">Craftsmanship</a>
            <a href="#" className="hover:text-amber-500 transition-colors font-light">Contact</a>
          </nav>

          <div className="flex gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: '#d4af37' }}
              className="text-stone-400 hover:text-amber-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: '#d4af37' }}
              className="text-stone-400 hover:text-amber-500 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2, color: '#d4af37' }}
              className="text-stone-400 hover:text-amber-500 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-stone-500 text-sm font-light">
          <p>© 2026 Aurelia. All rights reserved. Crafted with passion and precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
