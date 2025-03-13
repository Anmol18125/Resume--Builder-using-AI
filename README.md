# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# ✨ AI-Based Resume Builder

An intelligent, AI-powered Resume Builder that simplifies the resume creation process. Built with **React**, styled with **Tailwind CSS** (via **shadcn/ui**), and authenticated securely through **Clerk**. Leveraging **Google Gemini AI**, the app helps users generate professional resumes tailored to their goals. **Redux** manages global state seamlessly, and **React Router DOM** handles routing across the app.

---

## 🚀 Features

- 📝 AI-Powered Resume Generation using **Google Gemini AI**
- 🔒 Authentication & User Management with **Clerk**
- 🎨 Beautiful UI Components via **shadcn/ui** and **Tailwind CSS**
- 🔄 State Management with **Redux Toolkit**
- 🗺️ Routing using **React Router DOM**
- ⚡ Responsive & User-Friendly Design

---

## 📂 Project Structure

src/ ├── components/ # Reusable UI components (shadcn/ui) ├── pages/ # Different pages (Home, Dashboard, Resume Builder) ├── redux/ # Redux slices and store configuration ├── routes/ # React Router DOM route components ├── services/ # API calls (Google Gemini integration) ├── utils/ # Helper functions └── App.jsx # Main app entry point

---

## 🛠️ Tech Stack

| Tech                | Usage                      |
|---------------------|----------------------------|
| **React**           | Frontend framework         |
| **shadcn/ui**       | UI components (built on Tailwind CSS) |
| **Tailwind CSS**    | Utility-first styling      |
| **Clerk**           | Authentication & user management |
| **Redux Toolkit**   | Global state management    |
| **React Router DOM**| Routing & navigation       |
| **Google Gemini AI**| AI-driven content generation |

---

## 🔐 Authentication (Clerk)

- Fully integrated **Clerk** for:
  - Secure authentication (Sign-up, Login, Logout)
  - User profile management

Example usage:

jsx
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

<SignedIn>
  <UserButton />
</SignedIn>
<SignedOut>
  <RedirectToSignIn />
</SignedOut>

    
🤖 AI Integration (Google Gemini)
Google Gemini AI powers resume content generation:
Smart recommendations for different industries
Auto-generates professional summaries, experience descriptions, etc.
Implemented through Gemini's API.


🗺️ Routing (React Router DOM)
Multi-page navigation with React Router DOM
Examples: /home, /dashboard, /resume-builder

jsx
Copy
Edit
import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/resume-builder" element={<ResumeBuilder />} />
  </Routes>
</BrowserRouter>


🌐 State Management (Redux Toolkit)
Global state handling with Redux
Examples:

Auth state
Resume data
UI preferences
jsx
Copy
Edit
import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});


🎨 UI (shadcn/ui + Tailwind CSS)
Pre-styled components with shadcn/ui
Fully responsive and customizable with Tailwind CSS
Example button component:

jsx
Copy
Edit
import { Button } from "@/components/ui/button";

<Button className="w-full bg-blue-600 text-white">
  Generate Resume
</Button>

🏁 Getting Started
Prerequisites
Node.js (v18+ recommended)
Clerk account & API keys
Google Gemini API access
Installation
bash
Copy
Edit
git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder
npm install
Setup Clerk (Authentication)
Get your Clerk Frontend API Key
Create a .env.local file:
ini
Copy
Edit
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
Setup Google Gemini AI
Get your Gemini API Key
Add to .env.local:
ini
Copy
Edit
VITE_GEMINI_API_KEY=your_gemini_key
Run Locally
bash
Copy
Edit
npm run dev

📸 Screenshots
Auth
![image](https://github.com/user-attachments/assets/f84c2941-2baf-482b-aade-8561ea4eaf62)
Home
![image](https://github.com/user-attachments/assets/32e058df-5fb0-420c-9154-c61528efecd7)
On Click of Dashboard
![image](https://github.com/user-attachments/assets/b7510654-ad56-4d10-8020-b893c998dba5)

![image](https://github.com/user-attachments/assets/ab7a26d1-4066-4ced-83ff-8c8e9b7b043f)
Resume with Unique UUID
![image](https://github.com/user-attachments/assets/3b677179-47bb-4709-825e-469baa241edd)

