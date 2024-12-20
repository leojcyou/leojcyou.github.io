import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto break-after-auto">
        <p className="text-5xl font-bold mb-4">Leo You</p>
        <ul className="list-none mt-4 space-y-2 text-lg">
          <li className="flex items-center">
            <span className="list-markers mr-2">{">"}</span>
            <a href="/resume.pdf" download className="underline">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;
