"use client";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useKindeBrowserClient();

  const navbarLinks: { name: string; link: string }[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Plants",
      link: "/plants",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="border-b">
      <div className="container py-3 flex justify-between items-center">
        <div className="flex gap-8">
          <Link href={"/"}>
            <h1 className="text-primary font-bold text-lg">Buy Tulsi</h1>
          </Link>

          <div className="md:flex hidden items-center gap-4  ">
            {navbarLinks.map((link, index) => (
              <nav
                key={index}
                className="text-foreground/60 hover:text-primary text-sm"
              >
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
            <div className="text-sm flex gap-2  ">
              <div className="hover:text-primary">
                <LoginLink>Sign in</LoginLink>
              </div>
              <div className="hover:text-primary">
                <RegisterLink>Register</RegisterLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
