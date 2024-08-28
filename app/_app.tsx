import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

interface childrenType {
  children: React.ReactNode;
}

const LayoutComponents = ({ children }: childrenType) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutComponents;
