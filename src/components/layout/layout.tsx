// src/components/Layout.tsx
import React from "react";
import Header from "../header";
import { useLocation } from "react-router-dom";
import Head from "../head";
//import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <div>
      {pathname !== "/company/organization-mapping" ? <Header /> : <Head />}
      <>{children}</>
    </div>
  );
};

export default Layout;
