import React from "react";
import Sidebar from "@/Components/Sidebar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white hidden md:block fixed h-full">
        <Sidebar />
      </aside>

      {/* Main content with left margin same as sidebar width */}
      <main className="flex-1 md:ml-64 p-4 w-full">
        {children}
      </main>
    </div>
  );
}
