import React from "react";
import { Link } from "react-router-dom";
import Menu from "../helper/Menu";

const categories = {
  img2:
    "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  img4:
    "https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  img5:
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJvb2tzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  img6:
    "https://images.unsplash.com/photo-1610315593257-1c1692997d9c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80",
};

export default function Categories() {
  return (
    <div>
      <div className="h-screen">
        <h2 className="mx-4 text-gray-500 mb-4">ALL CATEGORIES</h2>
        <div className="grid grid-cols-2 gap-3 mx-4 mb-4">
          <Link to="/categories/shoes">
            <figure className="relative cursor-pointer">
              <img className="rounded-md" src={categories.img4} />
              <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
                <span className="text-sm ml-4 text-white ">Shoes</span>
              </figcaption>
            </figure>
          </Link>

          <Link to="/categories/jacket">
            <figure className="relative cursor-pointer">
              <img className="rounded-md" src={categories.img2} />
              <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
                <span className="text-sm ml-4 text-white ">Jacket</span>
              </figcaption>
            </figure>
          </Link>

          <figure className="relative cursor-pointer">
            <img className="rounded-md" src={categories.img5} />
            <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
              <span className="text-sm ml-4 text-white ">Books</span>
            </figcaption>
          </figure>

          <Link to="/categories/shoes">
            <figure className="relative cursor-pointer">
              <img className="rounded-md" src={categories.img4} />
              <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
                <span className="text-sm ml-4 text-white ">Shoes</span>
              </figcaption>
            </figure>
          </Link>

          <figure className="relative cursor-pointer">
            <img className="rounded-md" src={categories.img6} />
            <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
              <span className="text-sm ml-4 text-white ">Face Masks</span>
            </figcaption>
          </figure>

          <Link to="/categories/shoes">
            <figure className="relative cursor-pointer">
              <img className="rounded-md" src={categories.img4} />
              <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
                <span className="text-sm ml-4 text-white ">Shoes</span>
              </figcaption>
            </figure>
          </Link>
        </div>
      </div>
      <Menu />
    </div>
  );
}
