
 Student Information Management System (SIMS)
A complete Full-Stack MERN production architecture engineered to manage student records seamlessly. This repository features an atomic, utility-first user interface built with React, Vite, and Tailwind CSS that communicates dynamically via a RESTful API pipeline with a decoupled Node.js/Express server and a persistent MongoDB database.
🏗 Project Architecture Layout
The project is structurally split into two independent sub-environments inside a unified root directory for clean code separation:
text
📁 STUDENT_INFO_MS/                  👉 Main Project Workspace
├── 📁 student-info-system/          👉 FRONTEND ENVIRONMENT (React + Vite)
│   ├── 📁 src/pages/Dashboard.jsx   👉 Core Dashboard UI, memory state, & calculations
│   └── src/pages/Login.jsx          👉 Gatekeeper credentials form
└── 📁 sims-backend/                 👉 BACKEND ENVIRONMENT (Node + Express + MongoDB)
    ├── 📁 controllers/              👉 Brains layer (Executes raw database CRUD queries)
    ├── 📁 routes/                   👉 Reception layer (Maps URL strings to controllers)
    ├── db.js                        👉 Maintenance room (Manages MongoDB drivers & stream)
    └── server.js                    👉 Main Gate (Applies global CORS & boots server engine)


🔐 Administrative Access Credentials
To enter the secure management workspace console interface, use these system administrator credentials on the login portal screen:
Username: admin
Password: admin123


🔄 Full-Stack Core CRUD Capabilities
This system implements complete data propagation across four highly optimized endpoints:
READ (GET /api/students): Triggered automatically by a lifecycle useEffect hook the microsecond the dashboard opens. It requests all records from MongoDB, calculates real-time gender distributions, computes dynamic floating-decimal CGPA averages automatically, and populates the data table rows.
CREATE (POST /api/students): Intercepts live student profile packages from synchronized text inputs and select elements, issues a unique database serial identifier sticker tag (_id), and appends the document to the collection layout.
UPDATE (PUT /api/students/:id): Captures dynamic wildcard URL parameter string IDs, validates them cleanly with ObjectId.isValid to protect against application compile crashes, and safely targets and modifies matching records via the MongoDB $set modifier.
DELETE (DELETE /api/students/:id): Invoked inline by passing a targeted row index position when clicking the red trash icon, sending a background request across the port to permanently shred that single file from the database drawer.
🛠 Step-by-Step Installation & Deployment Instructions

⚙️ Phase 1: Booting Up the Backend Service
Open a terminal path window inside the backend subfolder directory:

cd sims-backend

Install the necessary system dependencies (Express, MongoDB native driver, and CORS clearance passport):

npm install
Use code with caution.
Boot up the asynchronous backend web server engine instance:

node server.js

The terminal should print: SIMS Backend server is listening cleanly on port 3000.



💻 Phase 2: Launching the Frontend Application View
Open a second, separate terminal window path inside the frontend subfolder directory:

cd student-info-system

Install the responsive UI dependencies and compilation tools:

npm install

Start the local Vite development compiling hot-reload engine server:

npm run dev

Open your web browser window and load the local hosting portal link printed in your terminal (usually http://localhost:5173 or http://localhost:5176).
Fill out the administrative login inputs and access the fully active live dashboard!



🚀 Next Development Horizons
Migrate data structuring models from raw driver cursors over to strict schematic validations using Mongoose ORM.
Replace hardcoded login conditions with secure, database-verified JWT (JSON Web Token) Authentication badges.


