import React, { createContext, ReactNode, useContext } from "react";
import axiosInstance from "./axiosInstance";
import { AxiosInstance } from "axios";

const AxiosContext = createContext<AxiosInstance | null>(null);

interface AxiosProviderProps {
  children: ReactNode;
}

export const AxiosProvider: React.FC<AxiosProviderProps> = ({ children }) => (
  <AxiosContext.Provider value={axiosInstance}>
    {children}
  </AxiosContext.Provider>
);

export const useAxios = (): AxiosInstance => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
};
