"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const WIP: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
      <div className="container mx-auto break-after-auto">
        <p className="text-5xl font-bold mb-4">
          <ReactTyped
            strings={[
              "Oops! I&apos;m still <span class='yellow-emph'>w</span>o<span class='yellow-emph'>r</span>k<span class='yellow-emph'>i</span>n<span class='yellow-emph'>g</span> on this page...",
            ]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={1000}
            showCursor={false}
          />
        </p>
        Click{" "}
        <Link className="underline" href="/">
          here
        </Link>{" "}
        to return or I&apos;ll just send you back anyways.
      </div>
  );
};

export default WIP;
