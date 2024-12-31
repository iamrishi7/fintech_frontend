"use client";
import Footer from "@/components/main/Footer";
import React, { ReactNode } from "react";
import Navbar from "@/components/main/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <br /><br />
      <Footer />
    </>
  );
};

export default layout;
