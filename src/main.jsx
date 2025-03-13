import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx';
import Dashboard from './dashboard/dashboard';
import SignInPage from './auth/sign-in';
import { Home } from 'lucide-react';
import HomePage from './home/home';
import EditResume from './dashboard/resume/[resumeId]/edit/index.jsx';
import ViewResume from './my-resume/[resumeID]/view/indedx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
 
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume />
      },
    ],
  },

  
  
  {
    path:'home',element:<HomePage />
  },
  { path: '/auth/sign-in', element: <SignInPage /> },

  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume />
  }
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
