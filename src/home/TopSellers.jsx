import React from "react";
import List from "../helper/List";
import ListView from "../helper/ListView";

const listData = [
  {
    id: 1,
    src:
      "https://images.unsplash.com/photo-1587754539999-b5f5492704c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGNsYXNzaWMlMjBqYWNrZXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Woman wearing a cool Brown coat",
    price: 85.12,
  },
  {
    id: 2,
    src:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Brown jacket with white inner shirt",
    price: 39.21,
  },
  {
    id: 3,
    src:
      "https://images.unsplash.com/photo-1542732057-3f3ee7446492?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Black hat",
    price: 64.33,
  },
  {
    id: 4,
    src:
      "https://images.unsplash.com/photo-1613125428390-f6a7236fbd22?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGhhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Black leather jacket",
    price: 48.81,
  },
  {
    id: 5,
    src:
      "https://images.unsplash.com/photo-1612019348292-348c631039b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGhhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    name: "Cute girl with red hat",
    price: 76.09,
  },
];

export default function TopSellers() {
  return (
    <section className="mx-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-gray-500">TOP SELLERS (5)</h2>
        <a href="#">View all</a>
      </div>
      <List>
        {listData.map((item) => (
          <ListView key={item.id} w="60" h="36" item={item} />
        ))}
      </List>
    </section>
  );
}
