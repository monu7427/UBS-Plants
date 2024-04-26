"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t pb-12 mt-12  ">
      <div className="container">
        <h2 className="text-2xl py-4 font-bold text-primary">Buy Tulsi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-muted-foreground font-medium mb-2">
              Quick Links
            </h3>
            <ul className="text-muted-foreground ml-1">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-muted-foreground font-medium mb-2">
              Our Terms
            </h3>
            <ul className="text-muted-foreground ml-1">
              <li>
                <Link href={"/terms-and-conditions"}>Terms and conditions</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/refund-policy"}>Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
