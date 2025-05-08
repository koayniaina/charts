import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      {children}
    </main>
  );
}
