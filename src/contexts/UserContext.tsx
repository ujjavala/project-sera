import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isOnboarded: boolean;
  setIsOnboarded: (onboarded: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+61 412 345 678',
    address: 'Melbourne, VIC',
    residencyStatus: 'pr',
    languages: ['English', 'Mandarin'],
    priorities: ['Housing', 'Healthcare', 'Citizenship'],
    subscriptionTier: 'free',
    createdAt: '2024-01-15',
    lastActive: '2024-04-10'
  });
  const [isOnboarded, setIsOnboarded] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser, isOnboarded, setIsOnboarded }}>
      {children}
    </UserContext.Provider>
  );
};