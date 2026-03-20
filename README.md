# 🔤 TypeTransform

> **Typed in the wrong language? No problem — just transform it.**

TypeTransform is a web application that solves a common frustration for bilingual typists: accidentally typing a full sentence without switching your keyboard language first. Instead of deleting everything and retyping, TypeTransform instantly converts your wrongly-typed text into what you actually intended to write.

---

## 🧩 The Problem

If you're a fast typist who doesn't always look at the screen, you've probably done this:

- You want to type in **Arabic**, but your keyboard is still set to **English**
- You type a whole sentence, look up, and see gibberish
- You have to delete it all and retype from scratch

**TypeTransform eliminates that frustration.**

---

## ✨ Features

- 🔄 Convert text typed in the wrong keyboard language to the intended language
- ⚡ Fast, responsive, and runs entirely in the browser
- 🌐 Built as a Single Page Application (SPA) — no page reloads
- 🎨 Clean and simple UI

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **Angular 13** | Frontend SPA framework |
| **TypeScript** | Core application logic (64.3%) |
| **SCSS** | Styling (16.5%) |
| **HTML** | Component templates (12.6%) |
| **JavaScript** | Configuration & tooling (6.6%) |
| **Karma** | Unit testing |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [Angular CLI](https://angular.io/cli) v13

```bash
npm install -g @angular/cli
```

### Installation

```bash
# Clone the repository
git clone https://github.com/ahmedabdo404/TypeTransform.git

# Navigate into the project directory
cd TypeTransform

# Install dependencies
npm install
```

### Running the App

```bash
ng serve
```

Then open your browser and navigate to `http://localhost:4200/`. The app will automatically reload whenever you make changes to the source files.

---

## 🏗️ Build

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory.

---

## 🧪 Testing

```bash
# Run unit tests via Karma
ng test
```

---

## 📁 Project Structure

```
TypeTransform/
├── src/              # Main application source code
│   └── app/          # Angular components, services, and modules
├── docs/             # Project documentation
├── .vscode/          # Editor configuration
├── angular.json      # Angular workspace configuration
├── package.json      # Dependencies and npm scripts
├── tsconfig.json     # TypeScript configuration
└── karma.conf.js     # Unit test runner configuration
```

---

## 📦 Releases

| Version | Date | Notes |
|---|---|---|
| **V1.0.0 Beta** | January 21, 2023 | First public release |

---

## 👤 Author

**Ahmed Abdo** — [@ahmedabdo404](https://github.com/ahmedabdo404)

---

## 📄 Further Help

For more help with Angular CLI, use:

```bash
ng help
```

Or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli).
