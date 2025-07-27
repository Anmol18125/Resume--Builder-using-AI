import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { UserButton, useUser } from '@clerk/clerk-react';

function HeaderP() {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md px-4 py-3 md:px-8 md:py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-2 md:gap-4">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.jpg" 
            alt="Logo" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          <span className="ml-2 text-white font-semibold hidden sm:inline-block">Anmol</span>
        </Link>
      </div>
      
      {isSignedIn ? (
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/dashboard">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1 text-sm md:text-base md:px-6 md:py-2"
              variant="outline"
            >
              Dashboard
            </Button>
          </Link>
          <UserButton 
            appearance={{
              elements: {
                userButtonAvatarBox: "w-8 h-8 md:w-9 md:h-9",
              }
            }}
          />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1 text-sm md:text-base md:px-6 md:py-2">
            Get Started
          </Button>
        </Link>
      )}
    </header>
  );
}

export default HeaderP;