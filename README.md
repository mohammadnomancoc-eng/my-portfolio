# 🚀 Mohammad Noman — Developer Portfolio

A modern, highly interactive, and fully responsive developer portfolio website built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS v4**, and **Styled Components**.

![Portfolio Preview](/public/images/author.jpeg)

---

## ✨ Features

- **🎹 Interactive 3D Mechanical Keyboard**: A custom 60% mechanical keyboard section showcasing 24 tech stack skills with realistic audio keycap sound effects, RGB underglow, and keyboard/mouse interaction.
- **🎴 3D Flip Profile & Experience Cards**: Interactive 3D flip card components for the profile header, featured projects, and work experience entries with touch/tap support on mobile.
- **📈 GitHub Activity & Contributions Graph**: Real-time GitHub contributions calendar showing daily coding activity, auto-scrolled to recent activity on mobile viewports.
- **💼 Work Experience & Education**: Detailed timeline highlighting roles, company logos, key impact metrics, tech stack tags, and bulleted achievements.
- **🛠️ Projects Showcase**: Featured projects display with live website links, GitHub repository links, badges, and responsive card layouts.
- **📬 Interactive Contact Form & Quick Connect**: Functional contact form powered by Google Apps Script integration, alongside one-tap WhatsApp text and Direct Call buttons.
- **📱 Mobile-Optimized Design**: Carefully tuned responsive layout adapting seamlessly across mobile (320px+), tablet, and desktop screens with floating mobile navigation.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/), [Styled Components](https://styled-components.com/)
- **UI Components & Icons**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Interactions & Visuals**: [React Activity Calendar](https://github.com/grubersjoe/react-activity-calendar), Web Audio API
- **Routing**: [React Router v6](https://reactrouter.com/)

---

## 📁 Project Structure

```text
portfolio-main/
├── public/                  # Static assets (images, sounds, favicons)
│   ├── assets/              # Audio assets for 3D keycaps
│   └── images/              # Project and profile media
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── keyboard/        # 3D Mechanical Keyboard & sound hooks
│   │   ├── kibo-ui/         # Contribution graph primitives
│   │   ├── ui/              # Radix & Shadcn UI elements
│   │   ├── contact-card.tsx # Interactive contact form
│   │   ├── experience.tsx   # Experience timeline & 3D cards
│   │   ├── navbar.tsx       # Floating glassmorphism navigation
│   │   ├── profile-card.tsx  # 3D Profile Flip Card
│   │   └── project.tsx      # Project card & links
│   ├── pages/               # Application routes (Home, Projects)
│   ├── sections/            # Major homepage sections (Skills, etc.)
│   ├── styles/              # Global CSS & Tailwind utilities
│   ├── App.tsx              # Main App component & routes
│   ├── config.tsx           # Portfolio data & content configuration
│   └── main.tsx             # Application entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### 1. Clone the repository

```bash
git clone https://github.com/mohammadnomancoc-eng/my-portfolio.git
cd my-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables (Optional)

Create a `.env` file in the root directory if you want to connect the contact form to a Google Apps Script endpoint:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_url_here
```

### 4. Run locally

```bash
npm run dev
```

Open `http://localhost:5173` (or the port indicated in your terminal) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server |
| `npm run build` | Builds the optimized production bundle into `/dist` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code formatting and quality issues |

---

## 👤 Author

**Mohammad Noman**  
- **GitHub**: [@mohammadnomancoc-eng](https://github.com/mohammadnomancoc-eng)  
- **LinkedIn**: [Mohammad Noman](https://www.linkedin.com/in/mohammad-noman-23b0a4324/)  
- **Email**: [mohammadnomancoc@gmail.com](mailto:mohammadnomancoc@gmail.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
