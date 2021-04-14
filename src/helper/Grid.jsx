import React from "react";

export default function Grid({ children }) {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-4 mx-4 mb-4">{children}</ul>
  );
}
