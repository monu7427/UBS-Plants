"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t pb-12 ">
      <div className="container">
        <h2 className="text-2xl py-4 font-bold text-primary">Buy Tulsi</h2>
        <div className="grid md:grid-cols-3">
          <div>
            <h3 className="text-muted-foreground font-medium mb-2">
              Quick Links
            </h3>
            <ul className="text-muted-foreground ml-1">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/"}>About Us</Link>
              </li>
              <li>
                <Link href={"/"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-muted-foreground font-medium mb-2">
              Our Terms
            </h3>
            <ul className="text-muted-foreground ml-1">
              <li>
                <Link href={"/"}>Terms and conditions</Link>
              </li>
              <li>
                <Link href={"/"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/"}>Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
