"use client";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";

const ExperiencePage: React.FC = () => {
  const [typed, setTyped] = useState(false);

  return (
    <>
      <div className="container mx-auto break-after-auto">
        <p className="text-5xl font-bold mb-2">
          <ReactTyped
            strings={["Experience"]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={1000}
            showCursor={false}
            onBegin={() => setTyped(false)}
            onComplete={() => setTyped(true)}
          />
        </p>

        {typed && (
          <div>
            <hr className="w-full h-2 mb-4" />

            <p className="text-3xl font-bold mb-2">Education</p>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">University of Waterloo</p>
                <p className="text-lg">Sept. 2022 - April 2027</p>
              </div>
              <p className="text-lg">
                Candidate for Bachelor of Applied Engineering in Mechatronics
                Engineering
              </p>
              <div className="flex items-center">
                <p className="text-lg mr-4">Term: 3A</p>
                <p className="text-lg mr-4">CGPA: 93.44%</p>
              </div>
            </div>

            <hr className="w-full h-2 mb-4" />

            <p className="text-3xl font-bold mb-4">Work Experience</p>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">Enstream LP</p>
                <p className="text-lg">May. 2024 - Sept. 2024</p>
              </div>
              <ul className="list-none mt-4 space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="blue-emph mr-2">{">"}</span>
                  <span>
                    Developed products for identifying and detecting clusters of
                    telecom fraud with Python and SQL for Canadian
                    telecommunications, banking, and insurance partners.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="red-emph mr-2">{">"}</span>
                  <span>
                    Analyzed distributions and time-series indicators curated
                    from customer, device, and activity data with Matplotlib and
                    Pandas to extract consumer behaviour patterns, develop a
                    trust-scoring function, and curate high-value indicators for
                    supervised machine learning.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="blue-emph mr-2">{">"}</span>
                  <span>
                    Designed a product demo website with Next.js, MySQL, and
                    Docker to demonstrate multifactor authentication based on
                    verifying the request origin with the telephone number on
                    file.
                  </span>
                </li>
              </ul>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">Arctic AI</p>
                <p className="text-lg">May. 2024 - Sept. 2024</p>
              </div>
              <ul className="list-none mt-4 space-y-2 text-lg">
                <li className="flex items-start">
                  <span className="blue-emph mr-2">{">"}</span>
                  <span>
                    Consulted on and led healthcare administration application
                    development for SaaS startup, reducing labor intensity by
                    95% and generating $28,000 in revenue.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="red-emph mr-2">{">"}</span>
                  <span>
                    Designed REST APIs and tools for scalable content and data
                    storage, email campaigns, and user management features
                    secured by JWT cookie-based authentication using a MySQL,
                    Express.js, TypeScript React, and TypeScript stack and
                    deployed with Docker on GCP.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="blue-emph mr-2">{">"}</span>
                  <span>
                    Developed reusable codebase for database management
                    and migration, secure authentication, and microservice
                    standards to streamline application development.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ExperiencePage;
