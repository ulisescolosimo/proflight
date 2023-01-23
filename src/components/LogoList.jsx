import React, { useState } from "react";
import logo from "../assets/proflight.png";

const LogoList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [
    {
      path: logo,
    },
    {
      path: logo,
    },
    {
      path: logo,
    },
    {
      path: logo,
    },
  ];

  const handlePrevClick = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(images.length - 1);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (selectedIndex === images.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-5">
      <button
        onClick={handlePrevClick}
        className="rounded-full p-3 bg-cyan-500 text-white hover:bg-cyan-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-caret-left-fill"
          viewBox="0 0 16 16"
        >
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
      </button>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.path}
          className={`w-40 h-40 rounded-xl opacity-${
            index == selectedIndex ? 100 : 50
          }`}
        />
      ))}
      <button
        onClick={handleNextClick}
        className="rounded-full p-3 bg-cyan-500 text-white hover:bg-cyan-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-caret-right-fill"
          viewBox="0 0 16 16"
        >
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </button>
    </div>
  );
};

export default LogoList;
