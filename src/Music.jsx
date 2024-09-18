import React from "react";
import casatte from "./assets/download.png";

export default function usic({ values, index, handlefavourite }) {
  const { song, artist, music, movie } = values;
  return (
    <div className="w-86 h-[9.5rem] bg-cyan-600 rounded-xl">
      <div className="flex m-2">
        <div>
          <img src={casatte} alt="" className="w-36 h-28 rounded-xl" />
        </div>
        <div className="flex flex-col m-2">
          <h1 className="text-xl font-bold">{song}</h1>
          <p>Artist : {artist}</p>
          <p>Music : {music}</p>
          <p>Movie : {movie}</p>
        </div>
      </div>

      <div className="flex justify-center ">
        <button
          className="bg-[#272727] hover:bg-[#000000] p-2 rounded-2xl text-zinc-300 text-sm"
          onClick={() => handlefavourite(index)}
        >
          Add to Favourite
        </button>
      </div>
    </div>
  );
}
