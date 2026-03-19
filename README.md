# Learning Repository

Welcome to my central Learning Hub! This repository contains various web development projects, experiments, and courses I am working through. It consists of a top-level React "Hub" portfolio and multiple individual projects nested inside the `apps` directory.

---

## 🏗️ Structure & Architecture

```text
learning-repo/
├── apps/                 # All your individual projects and chapters go here
│   ├── chapter-1/        # A simple static HTML/CSS project ("KS Foodie")
│   └── chapter-2/        # A React HR Portal (Vite + TypeScript + Material 3)
├── src/                  # The source code for the top-level Hub Portfolio App
├── package.json          # Dependencies for the Hub App
├── index.html            # Entry point for the Hub App
└── .github/workflows/    # CI/CD instructions to auto-deploy everything to GitHub Pages
```

---

## 🚀 Setup & Installation (Linux)

To work on this project locally, you need [Node.js](https://nodejs.org/) installed on your system. 

**1. Install Node.js (Ubuntu/Debian)**
If you haven't installed Node.js yet, you can do so using the NodeSource repository:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**2. Install Hub Dependencies**
Once Node.js is installed, clone the repo and install the dependencies for the main Hub app:
```bash
cd learning
npm install
```

---

## 🛠️ Running and Building the Hub

**To start the local development server for the Hub:**
```bash
npm run dev
```
*(This will open a local server, usually at `http://localhost:5173`, where you can view the Hub.)*

**To build the Hub for production:**
```bash
npm run build
```

**To preview the production build locally:**
```bash
npm run preview
```

---

## ➕ How to Create a New Project

The deployment script automatically handles both **Static Projects** and **React Projects**. Here is how to create them:

### 📦 Available Projects

- **[Chapter 2 HR Portal](./apps/chapter-2/README.md)**: A fully-fledged React 18 SPA utilizing Material UI for HR and Employee data management.

*For an in-depth architectural breakdown of Chapter 2, [Read the Walkthrough Document Here](./apps/chapter-2/walkthrough.md).*

### 🛠️ Creating New Projects

### 1. Static HTML Projects (e.g., `chapter-1`)
If your project is just basic HTML, CSS, and JS files, simply create a folder inside `apps/`:
```bash
mkdir -p apps/chapter-2
touch apps/chapter-2/index.html
```
*Note: Static projects don't need a `package.json`. The deployment action will just copy your files directly.*

### Option B: Creating a React Project (e.g., `chapter-3`)
If your project needs to be built with React and Vite, generate it directly into the `apps` folder using Vite's template generator.

**1. Create the project:**
```bash
cd apps
npm create vite@latest chapter-3 -- --template react
cd chapter-3
```

**2. Install its dependencies:**
```bash
npm install
```

**3. Run the nested project locally:**
```bash
npm run dev
```

*When creating a React project this way, Vite automatically generates the optimal `package.json` for you. A standard generated `package.json` will look like this:*
```json
{
  "name": "chapter-3",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.2.0"
  }
}
```

---

## 🌐 Automatic Deployment

You do not need to deploy manually! 

This repository is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`). 
Whenever you commit and push your code to the `main` branch, the workflow will automatically:
1. Build the root Hub application.
2. Scan the `apps/` directory.
3. Automatically run `npm install` and `npm run build` for any apps that have a `package.json` inside them.
4. Securely bundle static folders and generated build outputs together and host them on GitHub Pages.