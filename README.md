# Student Information Management System (SIMS)

SIMS is a lightweight full-stack web application designed to streamline student record-keeping. Built from scratch during a summer coding intensive, this project demonstrates end-to-end data flow between a React interface and a Node.js/Express REST API.

---

## Tech Stack

- **Frontend:** React (powered by Vite), React Router (`react-router-dom`), and modular CSS for fully custom, mobile-responsive styling.
- **Backend:** Node.js, Express.js (REST API), and CORS middleware to enable secure cross-origin requests.
- **Storage:** In-memory Node array (serving as a temporary bridge before database integration).

---

## Core Features

### Public Pages

- **Landing Page (`/`):** Reusable, data-driven sections including Hero, About, How It Works, Features, and Footer.
- **Login (`/login`):** An intuitive sign-in interface with client-side credential verification.

### Admin Dashboard (`/dashboard`)

- **Real-time Overview:** Dynamic calculation of total enrollment, gender distribution, and average CGPA directly from incoming state.
- **Student CRUD Operations:**
  - **Add:** Register new student entries via structured forms.
  - **View & Search:** Instant inline search to filter records by student name.
  - **Edit:** Populate form fields to update existing student profiles.
  - **Delete:** Instantly remove records from both the frontend view and backend array.
- **Mobile Friendly:** Collapsible sidebar menu equipped with a dynamic overlay backdrop for mobile viewports.

---

## API Reference

The backend operates on **`http://localhost:5001`**:

| Method   | Endpoint        | Purpose                      |
| :------- | :-------------- | :--------------------------- |
| `GET`    | `/`             | Verify API server status     |
| `GET`    | `/students`     | Retrieve all student records |
| `POST`   | `/students`     | Register a new student       |
| `PUT`    | `/students/:id` | Update student record by ID  |
| `DELETE` | `/students/:id` | Remove student record by ID  |

---

## Local Setup Guide

Because the architecture decouples client and server code, both services must run concurrently in separate terminal windows.

### 1. Launch the Backend API

```bash
cd sims-backend
npm install
node server.js
Runs on port 5001

2. Launch the Frontend Application
Bash
cd student-info-system
npm install
npm run dev
Runs on port 5173

3. Accessing the System
Open http://localhost:5173 in your browser.

Demo Admin Credentials:

Username: admin

Password: admin123

Project Structure
Plaintext
Student_Info_MS/
├── student-info-system/     # React frontend application
│   └── src/
│       ├── components/      # Navigation, Hero, About, Features, Footer
│       ├── pages/           # Home, Login, Dashboard
│       └── index.css        # Global CSS styles
└── sims-backend/            # Express REST API server
    └── server.js            # Server configuration and routes
Current Scope & Future Enhancements
This build focused on mastering core web development architecture and state flow. To keep the focus on foundation, certain production safeguards are slated for the next development phase:

Database Integration: Connect MongoDB via Mongoose so data persists beyond Node server restarts.

Secure Authentication: Replace frontend credential checks with hashed passwords (bcrypt) and JWT session tokens.

Role-Based Access: Expand functionality with dedicated views for Teachers, Students, and Parents.

Validation: Implement backend checks to prevent duplicate ID entries.

Developer Note
This application represents a hands-on learning journey from zero prior experience in React or backend development to constructing a working, full-stack application. Built incrementally step-by-step—from basic components and props to state management, routing, and HTTP request handling—every section reflects practical implementation and problem-solving.
```
