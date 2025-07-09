# Task Management App

A Task Management App built with **TypeScript**, **React**, and **Auth0** for authentication.

## ✨ Features

- ✅ Login and Logout with Auth0
- ✅ Task Dashboard to view all tasks
- ✅ Task creation with validation
- ✅ Task editing and status management
- ✅ Task detail view
- ✅ Protected routes using React Router
- ✅ Type-safe state management with Context API

---

## 🚀 Setup Instructions

### 1. Clone the Repository

`bash
git clone https://github.com/YOUR_USERNAME/task-management-app.git
cd task-management-app
2. Install Dependencies

npm install
3. Configure Auth0
Create a .env file in the root with your Auth0 details:

env

VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_CALLBACK_URL=http://localhost:5173/callback
Update Auth0ProviderWithNavigate.tsx to use these env values.

4. Run the Development Server

npm run dev

📁 Project Structure

src/
│
├── components/         # Reusable components like TaskForm, TaskDetails, etc.

├── context/            # Global state management (TaskProvider, useTasks)

├── pages/              # Route pages (Dashboard, CreateTask, EditTask)

├── auth/               # Auth0 integration (Provider, Login/Logout buttons)

├── types/              # TypeScript type definitions (Task type)

├── App.tsx             # Main app component with routes

├── main.tsx            # Entry point

└── index.css           # Global styles

🛡 Auth0 Integration
Uses @auth0/auth0-react for login and logout

ProtectedRoute ensures only authenticated users can access task features

🛠 Technologies Used
React

TypeScript

Vite

React Router

Context API

Auth0

CSS Modules or global styles
