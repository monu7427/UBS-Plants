import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container md:mt-12 mt-6">
      <div className="grid md:grid-cols-2  items-center">
        <div className="md:order-first order-last">
          <p className="inline-block bg-primary px-3 py-1 rounded-full  text-white mb-3 text-xs">
            #1 growing seller
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            Buy Tulsi
          </h1>

          <p className="mt-4 text-lg font-medium leading-6 tracking-tight text-foreground/60  ">
            Revered holy basil herb with numerous health benefits - boosts
            immunity, fights infections, lowers blood sugar.{" "}
          </p>

          <div className="mt-12">
            <Link
              href={"/order"}
              className="border-2 border-primary py-2 px-4 text-primary font-medium hover:bg-primary hover:text-white duration-300 "
            >
              Order Now{" "}
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center md:order-last order-first">
          <Image
            className="md:w-1/2  "
            src={"/images/main.png"}
            width={500}
            height={500}
            alt="tulsi image"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
