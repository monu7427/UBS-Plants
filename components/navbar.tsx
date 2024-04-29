"use client";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const session = useKindeBrowserClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const navbarLinks: { name: string; link: string }[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Order Now",
      link: "/order",
    },
    {
      name: "About",
      link: "/about-us",
    },
    {
      name: "Contact",
      link: "/contact-us",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div className="border-b bg-green-500 sticky top-0 z-50">
      <div className="container py-3 flex justify-between items-center">
        <div className="flex gap-8">
          <Link href={"/"}>
            <h1 className="text-black font-bold text-lg">Buy Tulsi</h1>
          </Link>

          {/* Mobile Menu Toggle Button */}
         

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center gap-4`}
          >
            {/* Render menu links */}
            {navbarLinks.map((link, index) => (
              <nav key={index} className="p-4 mt-5 md:p-0 md:mt-0 text-white hover:text-black text-sm ">
                <Link key={index} href={link.link}>
                  {link.name}
                </Link>
              </nav>
            ))}
          </div>
        </div>
        <div>
          {session.isAuthenticated ? (
            <button className="text-foreground/60 text-sm hover:text-red-500 font-medium">
              <LogoutLink>Logout</LogoutLink>
            </button>
          ) : (
            <div className="text-sm flex gap-2 ">
              <div className="text-white hover:text-black">
                <LoginLink>Sign in</LoginLink>
              </div>
              <div className="text-white hover:text-black">
                <RegisterLink>Register</RegisterLink>
              </div>
            </div>

          )}
        </div>
        <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none "
          >
            {/* Icon for menu toggle */}
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
      </div>
    </div>
  );
};

export default Navbar;
