import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-700 to-violet-500">
      <p className="text-xl font-bold ">blogAble</p>
    </div>
  );
}

export default Logo;
