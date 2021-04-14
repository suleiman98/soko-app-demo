import React from "react";
import ListView from "../../helper/ListView";
import { data } from "../../dummy";

export default function ShoesListView() {
  return (
    <ul className="grid grid-cols-1 gap-y-4 mx-4 mb-4">
      {data.categories.shoes.map((list) => (
        <ListView w="72" h="40" item={list} />
      ))}
    </ul>
  );
}
