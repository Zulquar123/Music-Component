import React from "react";

export default function Navbar() {
  return (
    <div className="w-4/5 h-10 bg-[#dadada7b] mt-5 rounded flex justify-between items-center px-5">
      <h1 className="text-[#FF6B00] font-bold">Orange</h1>
      <div className="flex justify-between items-center bg-[#FF6B00] rounded text-zinc-200 font-bold p-1 ">
        <h2 className="mx-1">Favourite</h2>
        <h2 className="mx-1">3</h2>
      </div>
    </div>
  );
}
