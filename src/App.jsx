import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import HeaderP from './components/custom/HeaderP';
import { Toaster } from 'sonner';

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn&&isLoaded) {
    return <Navigate to="/auth/sign-in" />;
  }

  return (
    <>
    <HeaderP />
    <Outlet />
    <Toaster/>
    </>
);
}

export default App;
