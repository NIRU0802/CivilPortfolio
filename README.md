# 🏗️ Civil Engineer Portfolio

A modern, responsive portfolio website for civil engineers built with cutting-edge web technologies. Showcases projects, services, testimonials, and professional information with stunning 3D visuals.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.183-000000?style=flat&logo=three.js)

---

## 🚀 Tech Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling & UI
- **MUI (Material UI)** - Component library
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Animations

### 3D & Graphics
- **Three.js** - 3D graphics
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers

### State & Forms
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Utilities
- **Lenis** - Smooth scrolling
- **React Intersection Observer** - Scroll animations

---

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   │   └── page.tsx
│   ├── contact/                 # Contact page
│   │   └── page.tsx
│   ├── gallery/                 # Gallery page
│   │   └── page.tsx
│   ├── projects/                # Projects listing
│   │   ├── ProjectsClient.tsx
│   │   ├── [slug]/              # Dynamic project detail
│   │   │   ├── ProjectDetailClient.tsx
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── services/                # Services listing
│   │   ├── ServicesClient.tsx
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── HomeClient.tsx           # Home page client component
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
│
├── components/
│   ├── 3d/                      # 3D components
│   │   ├── CanvasWrapper.tsx
│   │   ├── FloatingBackground.tsx
│   │   ├── FooterBlueprint.tsx
│   │   ├── Globe.tsx
│   │   ├── SceneLights.tsx
│   │   ├── SceneWrapperClient.tsx
│   │   ├── Svg3DModel.tsx
│   │   └── core/
│   │       └── SceneWrapper.tsx
│   ├── core/                    # Core components
│   │   ├── ClientSideWrapper.tsx
│   │   └── PageBackground.tsx
│   ├── molecules/               # Molecule components
│   │   ├── ProjectCard.tsx
│   │   ├── ServiceCard.tsx
│   │   └── TestimonialCard.tsx
│   ├── organisms/              # Organism components
│   │   ├── Footer.tsx
│   │   ├── InquiryForm.tsx
│   │   ├── Navbar.tsx
│   │   └── WhyChooseUs.tsx
│   ├── ui/                      # UI components
│   │   └── SectionHeading.tsx
│   └── utils/                   # Utility components
│       └── SmoothScroll.tsx
│
├── lib/
│   ├── data/                    # Data files
│   │   ├── about.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   └── testimonials.ts
│   └── store/                   # State management
│       └── useVisualStore.ts
│
├── public/
│   └── svg/                     # SVG assets
│       ├── architecture.svg
│       └── villa.svg
│
├── theme/
│   ├── MuiProvider.tsx          # MUI provider
│   └── muiTheme.ts              # MUI theme config
│
├── types/
│   └── index.ts                 # TypeScript types
│
├── next.config.ts               # Next.js config
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
└── postcss.config.mjs           # PostCSS config
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm / yarn / pnpm / bun

### Installation

```bash
# Clone the repository
git clone https://github.com/NIRU0802/CivilPortfolio.git

# Navigate to project directory
cd CivilPortfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## ✨ Features

- 🏛️ **3D Visual Elements** - Interactive 3D models and animations
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Smooth Animations** - Polished user experience
- 📬 **Contact Form** - Functional inquiry form with validation
- 🖼️ **Project Gallery** - Showcase of civil engineering projects
- 💼 **Services Section** - Professional services offered
- ⭐ **Testimonials** - Client reviews and feedback

---

## 📄 License

MIT License - feel free to use for your portfolio!

---

Built with ❤️ using Next.js & Three.js
