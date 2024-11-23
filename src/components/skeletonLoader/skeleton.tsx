// src/components/SkeletonLoader.tsx
import React from "react";

const SkeletonLoader: React.FC = () => {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="w-3/4 h-8 bg-gray-300 rounded-md"></div>
      <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
      <div className="flex space-x-4">
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
      </div>
      <div className="w-3/4 h-8 bg-gray-300 rounded-md"></div>
      <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
      <div className="flex space-x-4">
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
      </div>
      <div className="w-3/4 h-8 bg-gray-300 rounded-md"></div>
      <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
      <div className="flex space-x-4">
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
      </div>
      <div className="w-3/4 h-8 bg-gray-300 rounded-md"></div>
      <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
      <div className="flex space-x-4">
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
        <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
