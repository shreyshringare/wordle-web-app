# Wordle Clone (Frontend Only)

Deployed Link: https://wordle-shreyas.vercel.app/

A simple Wordle-style word guessing game built using React and Vite.  
This project includes the complete frontend game logic and interface.  
No backend or external API is used — the word list and validation happen locally.

---

## Features

- Word guessing gameplay based on the popular Wordle format
- Feedback color system:
  - Green: Correct letter in the correct position
  - Yellow: Correct letter in the wrong position
  - Gray: Letter not present in the word
- Supports both keyboard input and on-screen virtual keyboard
- Responsive and clean UI layout
- Local word list for validation

---

## Tech Stack

| Technology | Role |
|-----------|------|
| React     | UI and state management |
| Vite      | Development/build tooling |
| CSS       | Styling |

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/shreyshringare/wordle-web-app.git

cd wordle-web-app

npm install

npm run dev

npm run build
