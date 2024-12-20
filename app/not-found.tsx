"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 7000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="container mx-auto">
      <div className="container mx-auto break-after-auto">
        <p className="text-5xl font-bold mb-4">
          <ReactTyped
            strings={[
              "You're <span class='red-emph'>not</span> supposed to be here...",
            ]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1000}
            showCursor={true}
            cursorChar="|"
          />
        </p>
        Click{" "}
        <Link className="underline" href="/">
          here
        </Link>{" "}
        to return or I'll just send you back anyways.
      </div>
    </div>
  );
};

export default NotFoundPage;
