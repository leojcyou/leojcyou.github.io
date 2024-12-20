"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 100000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="container mx-auto">
      <div className="container mx-auto break-after-auto">
        <p className="text-5xl font-bold mb-4">
          You're not supposed to be here...
        </p>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
