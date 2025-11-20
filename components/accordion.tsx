"use client";

import { useState } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionpProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(active);

  return (
    <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50">
      <h2>
        <button
          className="flex w-full items-center justify-between text-left px-6 py-4"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen((prevState) => !prevState);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span className="font-medium text-gray-800">{title}</span>
          {/* Plus/Minus Icon */}
          <div className="flex-shrink-0 ml-4">
            {accordionOpen ? (
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            )}
          </div>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden text-sm text-gray-600 transition-all duration-300 ease-in-out ${
          accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-4">
            <hr className="border-gray-200 mb-3" />
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
