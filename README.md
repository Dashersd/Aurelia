# Aurelia - Luxury Jewelry Website

A modern, elegant luxury jewelry e-commerce website built with React, TypeScript, and Framer Motion. Features stunning animations, responsive design, and performance optimizations for smooth user experience.

## ✨ Features

- **Elegant Design**: Beautiful, luxury-focused UI with sophisticated animations
- **Performance Optimized**: Optimized for older processors with reduced particle counts and lighter effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Carefully crafted Framer Motion animations for a premium feel
- **Product Showcase**: Featured collections and signature pieces with interactive hover effects
- **Loading Screen**: Elegant loading animation with brand reveal

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Dashersd/Aurelia.git
cd Aurelia
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📁 Project Structure

```
Aurelia/
├── components/          # React components
│   ├── Hero.tsx
│   ├── FeaturedJewelry.tsx
│   ├── SignatureCollection.tsx
│   ├── AboutAurelia.tsx
│   ├── VisualHighlight.tsx
│   ├── CallToAction.tsx
│   ├── Footer.tsx
│   └── LoadingScreen.tsx
├── src/
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
│   └── Bracelet.png
├── index.html
└── package.json
```

## ⚡ Performance Optimizations

This project has been optimized for performance, especially on older processors:

- **Reduced Particle Counts**: Hero particles reduced from 15 to 5, SignatureCollection from 12 to 6
- **Lighter Blur Effects**: Changed from `blur-3xl` to `blur-xl` for better GPU performance
- **CSS Optimizations**: Added `will-change` hints and GPU acceleration
- **Optimized Animations**: Simplified complex transforms for smoother performance

## 🎨 Components

### Hero
The landing section with animated title, floating particles, and call-to-action buttons.

### FeaturedJewelry
Product grid showcasing featured jewelry pieces with hover effects and animations.

### SignatureCollection
Premium collection display with enhanced hover effects, particle animations, and elegant borders.

### VisualHighlight
Full-screen visual showcase with scroll-based animations.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deployment

The project can be deployed to:
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions or manual deployment

## 📄 License

This project is private and proprietary.

## 👤 Author

Dashersd

---

Built with ❤️ using React and Framer Motion
