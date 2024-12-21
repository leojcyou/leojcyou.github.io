"use client";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Link from "next/link";

const LandingPage: React.FC = () => {
  const [typed, setTyped] = useState(false);
  return (
    <>
      <div className="container mx-auto break-after-auto">
        <p className="text-5xl font-bold mb-4">
          <ReactTyped
            strings={["Leo You"]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1000}
            showCursor={false}
            onBegin={() => setTyped(false)}
            onComplete={() => setTyped(true)}
          />
        </p>
        {typed && (
          <ul className="list-none mt-4 space-y-2 text-lg">
            <li className="flex items-center">
              <span className="blue-emph mr-2">{">"}</span>
              <Link href="/experience" className="underline">
                Experience
              </Link>
            </li>
            <li className="flex items-center">
              <span className="red-emph mr-2">{">"}</span>
              <Link href="/hobbies" className="underline">
                Hobbies
              </Link>
            </li>
            <li className="flex items-center">
              <span className="blue-emph mr-2">{">"}</span>
              Download my ✨
              <a
                href="/resume.pdf"
                download="leo_you_resume.pdf"
                className="underline"
              >
                Resume
              </a>
              ✨
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default LandingPage;
