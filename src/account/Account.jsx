import React from "react";
import { Link } from "react-router-dom";
import Menu from "../helper/Menu";

export default function Account() {
  return (
    <div>
      <div className="mt-24 h-screen">
        <h1 className="flex text-3xl justify-center items-center text-blue-500 font-semibold">
          S
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          KO
        </h1>
        <h2 className="mt-6 text-3xl text-center font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <form className="mt-8 space-y-6">
          <div className="mb-4">
            <label
              for="number"
              className="block text-md font-medium text-gray-700"
            >
              Phone number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm border border-gray-300">
              <input
                type="number"
                name="number"
                id="number"
                className="focus:ring-indigo-500 py-2 focus:border-blue-400 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="00 0000 0000"
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                <label for="currency" className="sr-only">
                  Country code
                </label>
                <select
                  id="code"
                  name="code"
                  className="focus:ring-indigo-500 focus:border-blue-400 h-full py-0 pl-2 pr-1 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                >
                  <option>+234</option>
                  <option>+971</option>
                  <option>+44</option>
                  <option>+966</option>
                  <option>+212</option>
                </select>
              </div>
            </div>
          </div>
          <Link to="/account/successfull">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-blue-400 group-hover:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Send Verification Code
            </button>
          </Link>
        </form>
      </div>
      <Menu />
    </div>
  );
}
