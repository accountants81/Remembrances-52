// src/components/providers/AppProviders.tsx
"use client";

// This file can be used to wrap your application with any context providers
// For example, if you were using React Query, ThemeProvider, etc.
// For now, it's a simple pass-through, but good for future extensibility.

import React from 'react';

interface AppProvidersProps {
  children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <>{children}</>;
};

export default AppProviders;
