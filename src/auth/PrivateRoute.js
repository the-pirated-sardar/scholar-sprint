import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from './AuthStore';

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuthStore();

  return currentUser ? children : <Navigate to="/login" />;
}