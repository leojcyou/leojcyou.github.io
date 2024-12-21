"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ReactTyped } from "react-typed";

const NotFoundPage: React.FC = () => {
  const router = useRouter();
  const [typed, setTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 10000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <>
      <div className="container mx-auto break-after-auto">
        <p className="text-5xl font-bold mb-4">
          <ReactTyped
            strings={[
              "You&apos;re <span class='red-emph'>not</span> supposed to be here...",
            ]}
            typeSpeed={50}
            backSpeed={50}
            backDelay={1000}
            showCursor={false}
            onBegin={() => setTyped(false)}
            onComplete={() => setTyped(true)}
          />
        </p>
        {typed && (
          <div>
            Click{" "}
            <Link className="underline" href="/">
              here
            </Link>{" "}
            to return or I&apos;ll just send you back anyways.
          </div>
        )}
      </div>
    </>
  );
};

export default NotFoundPage;
