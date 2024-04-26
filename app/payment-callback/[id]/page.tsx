import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container md:mt-12 mt-6 ">
      <div className="flex items-center justify-center md:pt-36">
        <div className="text-center border py-6 px-3 rounded-lg shadow">
          <h1 className="text-2xl font-bold text">Thank You</h1>
          <p className="text-muted-foreground font-medium">
            We will update soon through your email soon.
          </p>
          <div className="mt-6">
            <Link href="/" className={cn(buttonVariants())}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
