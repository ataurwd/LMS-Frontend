'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types/index';
import { loginUser as apiLogin, registerUser as apiRegister, logoutUser as apiLogout, getSession } from '../services/auth.service';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: any) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initializeAuth() {
      try {
        const session = await getSession();
        if (session && session.user) {
          setUser(session.user);
        }
      } catch (error) {
        console.warn('No active session found.');
      } finally {
        setLoading(false);
      }
    }
    initializeAuth();
  }, []);

  const login = async (credentials: any) => {
    setLoading(true);
    try {
      const data = await apiLogin(credentials);
      if (data.success && data.user) {
        setUser(data.user);
        if (data.accessToken) {
          // Store token for requests
          localStorage.setItem('accessToken', data.accessToken);
        }
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: any) => {
    setLoading(true);
    try {
      const data = await apiRegister(userData);
      if (!data.success) {
        throw new Error(data.message || 'Registration failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await apiLogout();
      setUser(null);
      localStorage.removeItem('accessToken');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      logout,
      isAuthenticated: !!user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
