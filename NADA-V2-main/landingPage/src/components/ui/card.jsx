import React from 'react';

export function Card({ children, className, ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h2 className={`text-2xl font-bold ${className}`} {...props}>
      {children}
    </h2>
  );
}

export function CardDescription({ children, className, ...props }) {
  return (
    <p className={`text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  );
}