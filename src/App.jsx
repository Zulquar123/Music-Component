import React, { useState } from "react";
import Navbar from "./navbar";
import Music from "./music";

export default function App() {
  const data = [
    {
      song: "Satranga",
      artist: "Arjit Singh",
      music: "A.R rahman",
      movie: "animal",
      added: false,
    },
    {
      song: "Badsha Oh...",
      artist: "Sonu Nigam",
      music: "Kishor Da",
      movie: "Deewana",
      added: false,
    },
    {
      song: "Mai Hoona",
      artist: "Ram Lila",
      music: "Md Rafi",
      movie: "Pathan",
      added: false,
    },
    {
      song: "Lut Put Gaya",
      artist: "Udit Narayan",
      music: "Abhijit",
      movie: "Dunki",
      added: false,
    },
  ];
  const [rawData, setData] = useState(data);
  const handlefavourite = (musicIndex) => {
    setData((previous) => {
      return previous.map((item, index) => {
        if (musicIndex === index) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar data={rawData} />
      <div className="flex gap-3 mt-10 justify-center items-center">
        {rawData.map((item, index) => (
          <Music
            key={index}
            values={item}
            index={index}
            handlefavourite={handlefavourite}
          />
        ))}
      </div>
    </div>
  );
}
