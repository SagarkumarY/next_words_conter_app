"use client";

import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <div className="w-full h-16 bg-[#428bca] text-white   flex items-center  gap-7 p-8" style={{background:"#428bca"}}>
            {/* Logo Section */}
            <div className="flex items-center  p-4">
                <h1 className="flex items-center gap-1">
                    <span className="bg-black text-white text-3xl font-bold px-2 py-1">W</span>
                    <span className="text-white font-bold text-3xl">O</span>
                    <span className="bg-gray-300 text-white font-bold text-3xl px-2">R</span>
                    <span className="bg-blue-300 text-white font-bold text-3xl px-2">D</span>
                </h1>
                <h2 className="font-medium text-3xl ml-2">Counter</h2>
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center gap-6">
                <Link href={"/"} className=" hover:bg-blue-950 px-3 py-5 hover:text-gray-100 cursor-pointer transition-colors">Home</Link>
                <Link href={"/about"} className="hover:bg-blue-950 px-3 py-5 hover:text-gray-100  cursor-pointer transition-colors">About</Link>
                <Link href={"/"} className="hover:bg-blue-950 px-3 py-5 hover:text-gray-100  cursor-pointer transition-colors">More</Link>
            </ul>
        </div>
    );
}

export default Navbar;
