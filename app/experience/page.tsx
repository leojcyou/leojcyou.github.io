"use client";
import React from "react";
// import Link from "next/link";
import { ReactTyped } from "react-typed";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto break-after-auto">
        <p className="text-5xl font-bold mb-4">
          <ReactTyped
            strings={[
              "Experience",
            ]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={1000}
            showCursor={false}
          />
        </p>
        
      </div>
    </>
  );
};

export default LandingPage;
