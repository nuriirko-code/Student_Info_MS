# Student Information Management System (SIMS)

SIMS is a responsive React web application designed for managing student records. Built during an intensive coding program, this project allows an administrator to log in, view live statistics, search records, and perform full CRUD (Create, Read, Update, Delete) operations—persisting data locally in the browser using `localStorage`.

---

## Tech Stack

- **Frontend:** React (Vite)
- **Routing:** React Router (`react-router-dom`)
- **Styling:** Custom CSS (Mobile-responsive with collapsible sidebar menu)
- **Data Storage:** Browser `localStorage` (Synchronous client-side persistence)

---

## Core Features

### Public Pages

- **Landing Page (`/`):** Dynamic sections including Hero, About, How It Works, Features, and Footer.
- **Login Page (`/login`):** Admin sign-in interface.

### Admin Dashboard (`/dashboard`)

- **Real-Time Overview:** Calculates total enrollment, male/female distribution, and average CGPA dynamically from state.
- **Student CRUD Operations:**
  - **Create:** Register new students through a controlled form.
  - **Read & Search:** Filter the directory in real time by student name.
  - **Update:** Populate and edit existing student details.
  - **Delete:** Remove student records instantly.
- **Data Persistence:** Automatically synchronizes all changes to browser `localStorage` so data survives page refreshes.

---

## How to Run

1. **Install Dependencies:**
   ```bash
   cd student-info-system
   npm install
   Start the React App:
   ```

Bash
npm run dev
Open in Browser:
Navigate to http://localhost:5173

Demo Admin Credentials:

Username: admin

Password: admin123

Project Structure
Plaintext
Student_Info_MS/
└── student-info-system/ # React frontend application
└── src/
├── components/ # Navbar, Hero, About, Features, Footer
├── pages/ # Home, Login, Dashboard
└── index.css # Global CSS styles
Future Scope (Full-Stack Roadmap)
Backend REST API: Connect to a Node.js/Express server.

Database Integration: Implement MongoDB (Mongoose) for server-side persistence.

Authentication: Implement secure JWT authentication and password hashing.
