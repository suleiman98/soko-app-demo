import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const carousel = {
  img1:
    "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  img2:
    "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  img3:
    "https://images.unsplash.com/photo-1519431458145-1ca3d5ccd68e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YWNjZXNzb3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  img4:
    "https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  img5:
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fGJvb2tzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  img6:
    "https://images.unsplash.com/photo-1542732057-3f3ee7446492?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
};

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Link to="/categories/shoes">
    <figure className="relative mr-1 cursor-pointer">
      <img
        className="rounded-md"
        src={carousel.img4}
        onDragStart={handleDragStart}
      />
      <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
        <span className="text-sm ml-4 text-white ">Shoes</span>
      </figcaption>
    </figure>
  </Link>,
  <Link to="/categories/jacket">
    <figure className="relative ml-1 cursor-pointer">
      <img
        className="rounded-md"
        src={carousel.img2}
        onDragStart={handleDragStart}
      />
      <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
        <span className="text-sm ml-4 text-white ">Jacket</span>
      </figcaption>
    </figure>
  </Link>,
  <figure className="relative mr-1 cursor-pointer">
    <img
      className="rounded-md"
      src={carousel.img5}
      onDragStart={handleDragStart}
    />
    <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
      <span className="text-sm ml-4 text-white ">Books</span>
    </figcaption>
  </figure>,
  <Link to="/categories/shoes">
    <figure className="relative mr-1 cursor-pointer">
      <img
        className="rounded-md"
        src={carousel.img4}
        onDragStart={handleDragStart}
      />
      <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
        <span className="text-sm ml-4 text-white ">Shoes</span>
      </figcaption>
    </figure>
  </Link>,
  <figure className="relative ml-2 cursor-pointer">
    <img
      className="rounded-md"
      src={carousel.img5}
      onDragStart={handleDragStart}
    />
    <figcaption className="absolute inset-0 pt-40 bg-gradient-to-t from-black rounded-b-md">
      <span className="text-sm ml-4 text-white ">Books</span>
    </figcaption>
  </figure>,
];

const responsive = { 0: { items: 2 } };

const Gallery = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      disableButtonsControls={true}
    />
  );
};

const GalleryStyle = ({ children }) => <div className="mx-4">{children}</div>;

export default function HomeCarousel() {
  return (
    <GalleryStyle>
      <h2 className="text-sm text-gray-500 mb-4">TOP CATEGORIES</h2>
      <Gallery />
    </GalleryStyle>
  );
}
