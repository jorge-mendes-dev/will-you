# 💍 Will You Marry Me?

A beautiful, interactive marriage proposal website built with React, TypeScript, and Vite. Features elegant animations, confetti effects, and a playful "no" button that runs away from the cursor!

## ✨ Features

- 🎨 **Beautiful Design** - Elegant gradient background with romantic rose and pink tones
- 💌 **Custom Typography** - Handwritten-style cursive font (Playwrite NZ Basic Guides) for the proposal
- 🎊 **Confetti Animation** - Celebratory confetti explosion when "Sim, aceito!" is clicked
- 🏃 **Interactive Buttons** - The "Não aceito" button playfully moves away when you try to hover over it
- 📱 **Fully Responsive** - Works beautifully on desktop, tablet, and mobile devices
- 🖼️ **Photo Gallery** - Display your cherished memories with a modern grid layout
- ♿ **Accessible** - Follows web accessibility guidelines with proper focus states and alt text
- ⚡ **Fast** - Built with Vite for lightning-fast development and optimized production builds

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd will-you
```

2. Install dependencies:
```bash
npm install
```

3. Add your images:
   - Place 4 images named `01.jpg`, `02.jpg`, `03.jpg`, and `04.jpg` in the `src/assets/` folder
   - These will be your special moments displayed in the photo gallery

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **react-confetti** - Celebration animations
- **Google Fonts** - Custom typography (Playwrite NZ Basic Guides & Inter)

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder, ready to deploy.

## 🎨 Customization

### Change the Message

Edit the text in `src/components/Content.tsx`:

```tsx
<h2>Quer se casar comigo?</h2>
<p>Your custom message here...</p>
```

### Change Colors

The color scheme uses Tailwind's rose palette. To change colors, update the classes in `Content.tsx`:
- `text-rose-600` - Title color
- `bg-rose-600` - Button background
- `from-rose-50 via-white to-pink-50` - Background gradient

### Change Font

Update the font import in `index.html` and the CSS class in `src/index.css`.

## 📁 Project Structure

```
will-you/
├── src/
│   ├── assets/          # Images (01.jpg, 02.jpg, 03.jpg, 04.jpg)
│   ├── components/      # React components
│   │   └── Content.tsx  # Main proposal component
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── vite.config.ts       # Vite config
└── README.md           # This file
```

## 🎯 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌟 Features Explained

### Confetti Animation
When the "Sim, aceito!" button is clicked, 500 confetti pieces rain down for 5 seconds using the `react-confetti` library.

### Moving Button
The "Não aceito" button uses React state and mouse events to dynamically reposition itself when hovered, making it impossible to click. It smoothly returns to its original position when the mouse leaves.

### Responsive Design
The layout adapts seamlessly across devices:
- Mobile: Single column with stacked images
- Tablet: Enhanced spacing and larger images
- Desktop: Two-column layout with elegant photo grid

## 📝 License

This project is open source and available for personal use.

## 💝 Made with Love

Created with React, TypeScript, and lots of ❤️

---

**Good luck with your proposal! 💍✨**
