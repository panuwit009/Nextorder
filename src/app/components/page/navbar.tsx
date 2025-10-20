"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center border border-gray-300">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold text-gray-800">
        My Shop
      </div>

      {/* เมนูใหญ่ (desktop) */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">หน้าแรก</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">สินค้า</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">โปรโมชั่น</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">เกี่ยวกับเรา</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">ติดต่อ</a>
      </div>

      {/* ปุ่ม Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-800 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* เมนูมือถือ (toggle ด้วย state) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="#" className="text-gray-600 hover:text-gray-900">หน้าแรก</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">สินค้า</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">โปรโมชั่น</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">เกี่ยวกับเรา</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">ติดต่อ</a>
        </div>
      )}
    </nav>
  );
}
