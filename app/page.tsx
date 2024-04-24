import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link href={"/terms-and-conditions"}>Terms and conditions</Link>
      <Link href={"/about-us"}>About US</Link>
      <Link href={"/contact-us"}>Contact us</Link>
      <Link href={"/privay-policy"}>Privacy Policy</Link>
    </div>
  );
};

export default page;
