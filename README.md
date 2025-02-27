# QR Code Generator

A simple, elegant QR code generator built with React, TypeScript, and Tailwind CSS.

## Live Demo

**Visit the live application: [https://drfu-qr-generator.netlify.app/](https://drfu-qr-generator.netlify.app/)**

## Features

- Generate QR codes from any valid URL
- Adjust QR code size with an interactive slider (128px to 512px)
- Real-time URL validation
- Clean, responsive UI that works on mobile and desktop
- Right-click to save generated QR codes as images

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite (for fast development and optimized builds)
- qrcode.react (for QR code generation)
- Lucide React (for beautiful icons)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

You can deploy this application to any static site hosting service like:

- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

Example deployment with Netlify:

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`

## Project Structure

```
qr-code-generator/
├── public/             # Static assets
├── src/
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles (Tailwind imports)
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## Customization

### Changing Colors

You can modify the color scheme by editing the Tailwind classes in `src/App.tsx`. The current design uses indigo as the primary color.

### Adding Features

Some ideas for extending the application:

- Add color customization for QR codes
- Implement error correction level adjustment
- Add ability to embed logos in QR codes
- Create a history of generated QR codes

## License

MIT

## Acknowledgements


- [qrcode.react](https://github.com/zpao/qrcode.react) for the QR code generation
- [Lucide React](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the styling
- [Vite](https://vitejs.dev/) for the build tooling

## Assoc. Prof. Ferhat Ucar
