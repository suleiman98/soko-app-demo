import React from "react";

export default function Header() {
  return (
    <div className="flex mx-4">
      <div className="bg-gray-200 flex place-items-center rounded-full p-2">
        <svg
          className="w-9 h-9 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      </div>
      <div className="ml-4">
        <h2 className="text-xl font-semibold">Target</h2>
        <div className="text-gray-500">
          Cham Towers, Plot 12 Nkruma Rd, Kampala, Ug
        </div>
      </div>
    </div>
  );
}
