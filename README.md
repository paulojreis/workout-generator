# Workout generator

A React application built with modern web technologies and ShadCN UI components.

## Tech Stack

- **React 19** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework
- **ShadCN UI** - Beautiful, accessible component library built on Radix UI

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
workout-generator/
├── src/
│   ├── components/
│   │   └── ui/          # ShadCN UI components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
└── components.json      # ShadCN UI configuration
```

## Adding ShadCN Components

You can add any ShadCN component using:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add form
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com)

## Features

- Modern React with TypeScript
- Tailwind CSS v4 for styling
- ShadCN UI component library with multiple button variants
- Path aliases configured (`@/` points to `src/`)
- ESLint for code quality
- Hot Module Replacement (HMR) for fast development

## License

MIT
