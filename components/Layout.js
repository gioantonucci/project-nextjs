import React from "react";
import Navbar from "@components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">This is the footer</footer>
      <style jsx>{
        `
          .container {
            background: salmon;
          }
        
        `}</style>
    </div>
  );
};

export default Layout;
