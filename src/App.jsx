import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import HeaderP from './components/custom/HeaderP';
import { Toaster } from 'sonner';
import System from './components/custom/system';

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className='flex items-center justify-center h-screen'>Loading...</div>;
  }

  if (!isSignedIn&&isLoaded) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <>
    <HeaderP />
    <System/>
    <Outlet />
    <Toaster/>
    </>
);
}

export default App;
