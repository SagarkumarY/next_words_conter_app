"use client";

import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
    return (
        <div className="w-full bg-gray-700 text-white">
            <footer className="w-[90%]  flex flex-col md:flex-row justify-between p-10 md:p-16 gap-8">
                {/* Links Section */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Blogs</a></li>
                        <li><a href="#" className="hover:underline">More Tools</a></li>
                        <li><a href="#" className="hover:underline">Help Word Counter</a></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2">Support</h3>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:underline">Report a Bug</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <Facebook size={20} />
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Instagram size={20} />
                            <a href="#" className="hover:underline">Instagram</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Twitter size={20} />
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
