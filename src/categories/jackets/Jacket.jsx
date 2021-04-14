import React, { useReducer, useState } from "react";
import JacketGridView from "./JacketGridView";
import Search from "../../helper/Search";
import Menu from "../../helper/Menu";
import JacketListView from "./JacketListView";
import { data } from "../../dummy";

function reducer(state, action) {
  if (action.type === "list") {
    return {
      view: <JacketListView />,
      display: "list",
    };
  }
  if (action.type === "grid") {
    return {
      view: <JacketGridView />,
      display: "grid",
    };
  }
}

export default function Shoes(props) {
  const [state, dispatch] = useReducer(reducer, {
    view: <JacketGridView />,
    display: "grid",
  });
  const [order, setOrder] = useState(data.categories.jacket);
  return (
    <div>
      <div className="border-b pb-4">
        <button onClick={props.history.goBack} className="flex w-full mx-4">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="ml-4 font-semibold text-lg items-baseline">
            Jacket
          </span>
        </button>
      </div>
      <div className="py-4 space-y-4 border-b mb-4">
        <Search placeholder="Search for jackets..." />
        <div className="mx-20 flex justify-between">
          <div className="flex">
            <div>
              {state.display === "grid" ? (
                <div
                  className="flex"
                  onClick={() => dispatch({ type: "list" })}
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  <span className="text-gray-500 ml-2">List View</span>
                </div>
              ) : (
                <div
                  className="flex"
                  onClick={() => dispatch({ type: "grid" })}
                >
                  <svg
                    className="w-6 h-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span className="text-gray-500 ml-2">Grid View</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex">
            <div className="flex">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span className="text-gray-500 ml-2">Sort</span>
            </div>
          </div>
        </div>
      </div>
      {state.view}
      <Menu />
    </div>
  );
}
