import React from "react";

const ButtonNext = ({
  children,
  type,
}: {
  children: string;
  type: "submit";
}) => {
  return (
    <button
      type={type}
      className="group relative flex w-36 items-center cursor-pointer rounded-lg border-2 border-sky-500 p-4 text-sky-300;"
    >
      <span className="font-semibold text-xl">{children}</span>
      <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-500 duration-300 group-hover:w-5/6">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M4 12H20M20 12L14 6M20 12L14 18"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      </span>
    </button>
  );
};

export default ButtonNext;
