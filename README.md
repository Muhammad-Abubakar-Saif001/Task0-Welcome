# 📝 Web Programming Fundamentals — Task 0 (Welcome)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?logo=github)](https://pages.github.com/)

An interactive frontend web application showcasing fundamental web development concepts—featuring a **dynamic, client-side Notes Application** and a **custom in-browser JavaScript Developer Console (REPL)** built with pure vanilla HTML5, CSS3, and modern JavaScript.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Live Components](#-live-components)
  - [1. Notes Application (index.html)](#1-notes-application-indexhtml)
  - [2. Interactive Dev Console (DevConsole.html)](#2-interactive-dev-console-devconsolehtml)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
- [Key Technical Concepts](#-key-technical-concepts)
- [Deploying to GitHub Pages](#-deploying-to-github-pages)
- [Author & License](#-author--license)

---

## 📖 Overview

This project serves as an introductory hands-on implementation of core web technologies (HTML, CSS, JavaScript) based on **CS193X: Web Programming Fundamentals**. It explores foundational frontend concepts such as Document Object Model (DOM) manipulation, event-driven architectures, form handling, and runtime script evaluation.

---

## ✨ Key Features

- ⚡ **Zero External Dependencies**: 100% vanilla HTML5, CSS3, and JavaScript (ES6+).
- 📌 **Dynamic Note Management**: Instant note creation, client-side state tracking, and reactive DOM rendering.
- 💻 **Custom Web REPL / Console**: An embedded JavaScript interactive shell capable of executing expressions, capturing output, and handling runtime exceptions with auto-scrolling terminal logs.
- 🎨 **Minimalist Responsive Styling**: Clean layout with modern form controls and adaptive container sizing.
- 🌐 **Static Host Ready**: Perfectly optimized for GitHub Pages or static web servers.

---

## 🖥 Live Components

### 1. Notes Application (index.html)
- Allows users to enter text notes through a validated HTML form.
- Intercepts default form submission (event.preventDefault()) to avoid page reloads.
- Manages notes in an in-memory array and dynamically reconstructs list items (<li>) using DOM manipulation methods (document.createElement, ppendChild).

### 2. Interactive Dev Console (DevConsole.html)
- An in-browser developer terminal styled with high-contrast theme (#111 background, matrix green #0f0 typography).
- Evaluates inputted JavaScript strings dynamically (eval()) and returns computation results.
- Wraps evaluations in a robust 	ry...catch block to handle syntax/runtime errors gracefully without crashing the tab.
- Automatically handles vertical scrolling to keep recent output in view.

---

## 📁 Project Structure

`plaintext
Task0-Welcome/
├── index.html                                 # Main Notes application markup
├── style.css                                  # Stylesheet for Notes application layout
├── main.js                                    # DOM rendering & form logic for Notes app
├── DevConsole.html                            # Standalone in-browser JavaScript REPL terminal
├── CS193X_ Web Programming Fundamentals.html  # Course assignment reference guide
└── README.md                                  # Project documentation
`

---

## 🚀 Getting Started

### Prerequisites

All you need is any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

---

### Running Locally

1. **Clone the repository:**
   `ash
   git clone https://github.com/Muhammad-Abubakar-Saif001/Task0-Welcome.git
   cd Task0-Welcome
   `

2. **Open directly in your browser:**
   - On Windows:
     `powershell
     Start-Process index.html
     Start-Process DevConsole.html
     `
   - On macOS:
     `ash
     open index.html
     `
   - On Linux:
     `ash
     xdg-open index.html
     `

3. **Or run with a local HTTP server:**
   - Using **Node.js**:
     `ash
     npx serve .
     `
   - Using **Python 3**:
     `ash
     python -m http.server 8000
     `
   Then navigate to http://localhost:8000.

---

## 🧠 Key Technical Concepts

| Concept | Implementation in Code |
| :--- | :--- |
| **DOM Traversal & Selection** | document.getElementById('note-form'), document.getElementById('notes-list') |
| **Event Delegation & Listeners** | orm.addEventListener('submit', ...), input.addEventListener('keydown', ...) |
| **Preventing Default Actions** | e.preventDefault() to manage SPA-like state without reloading the browser |
| **Dynamic Element Generation** | document.createElement('li') and 
otesList.appendChild(li) |
| **Runtime Script Execution & Safety** | 	ry { eval(code) } catch (err) { ... } inside the custom console |

---

## 🌐 Deploying to GitHub Pages

To make this project publicly accessible online:

1. Navigate to your repository on GitHub: https://github.com/Muhammad-Abubakar-Saif001/Task0-Welcome.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Set Branch to main and Folder to / (root).
5. Click **Save**. Your site will be live at:
   `
   https://muhammad-abubakar-saif001.github.io/Task0-Welcome/
   `

---

## 👤 Author

**Muhammad Abubakar Saif**
- GitHub: [@Muhammad-Abubakar-Saif001](https://github.com/Muhammad-Abubakar-Saif001)

---

## 📄 License

This project is open source and available under the [ISC License](README.md).
