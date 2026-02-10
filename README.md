# Triumvirate Metals

> "A civilization is only as secure as the raw materials that build it, and only as moral as the methods used to extract them."

**Triumvirate Metals** is a next-generation initiative focused on securing sovereign supply chains, establishing robust defense infrastructure, and rebuilding educational foundations. This project showcases a high-fidelity, cinematic web experience designed to convey the weight and importance of this mission.

![License](https://img.shields.io/badge/license-Private-blue.svg)
![React](https://img.shields.io/badge/react-19.2.4-61dafb.svg?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5.8.2-3178c6.svg?logo=typescript)
![Vite](https://img.shields.io/badge/vite-6.2.0-646cff.svg?logo=vite)
![Tailwind](https://img.shields.io/badge/tailwindcss-3.4-38bdf8.svg?logo=tailwindcss)

## 🚀 Mission

Our operations are built upon three core pillars:

1.  **Strategic Extraction**: Securing materials essential for advanced technology and clean energy, independent of adversarial geopolitics.
2.  **Defense Infrastructure**: Deploying advanced technology to secure operations and assets globally.
3.  **Education**: Rebuilding institutions to ensure future generations are equipped to maintain free societies.

## ✨ Features

*   **Cinematic UI**: Immersive video backgrounds and atmospheric overlays (noise, light leaks).
*   **Advanced Animations**: Custom-built `TextReveal`, `FadeIn`, and parallax scroll effects for a dynamic user experience.
*   **Modern Tech Stack**: Built with the latest React 19 and TypeScript for performance and type safety.
*   **Responsive Design**: Fully responsive layouts tailored for all device sizes using Tailwind CSS.
*   **Editorial Aesthetics**: Custom typography (Inter & Space Grotesk) and a refined color palette (Obsidian, Copper, Steelblue).

## 🛠️ Tech Stack

*   **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (configured via standard config)
*   **Routing**: Custom hook-based router for seamless transitions.

## 📦 Getting Started

Follow these steps to run the project locally.

### Prerequisites

*   **Node.js**: Ensure you have Node.js installed (v18+ recommended).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/paroteen/triumvirate-metals.git
    cd triumvirate-metals
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    *   Create a `.env.local` file (optional, if API keys are needed in the future).
    *   *Note: Current version does not require specific env vars for UI demo.*

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To create a production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## 📂 Project Structure

```
triumvirate-metals/
├── src/
│   ├── components/      # Reusable UI components (Navigation, Footer, etc.)
│   ├── hooks/           # Custom React hooks (useScroll, etc.)
│   ├── pages/           # Page components (Home, About, Operations, etc.)
│   ├── App.tsx          # Main application component & routing logic
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── package.json         # Project dependencies and scripts
```

---

*Generated for Triumvirate Metals.*
