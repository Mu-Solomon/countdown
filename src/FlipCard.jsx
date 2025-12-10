import { useEffect, useState } from "react";
export default function FlipCard({ value, label }) {
  const padded = value < 10 ? `0${value}` : value;

  const [flip, setFlip] = useState(false);
  const [prevValue, setPrevValue] = useState(padded);

  useEffect(() => {
    if (padded !== prevValue) {
      setFlip(true);

      const timeout = setTimeout(() => {
        setFlip(false);
        setPrevValue(padded);
      }, 700); // duration must match animation time

      return () => clearTimeout(timeout);
    }
  }, [padded, prevValue]);

  return (
    <div className="flex flex-col items-center">
      {/* IMPORTANT: group must be on the wrapper */}
      <div className="group perspective h-16 w-18 md:h-22 md:w-24">
        {/* rotating element */}
        <div
          className={`relative h-full w-full transition-transform duration-700 transform-style-preserve-3d ${
            flip ? "rotate-x-180" : ""
          } `}
        >
          {/* FRONT */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#191a24ff] rounded-md backface-hidden shadow-xl">
            <span className="bg-[#343650ff] w-full h-1/2 rounded-md"></span>

            <h2 className="text-[#fb6087ff] text-4xl md:text-5xl font-bold absolute">
              {padded}
            </h2>

            <span className="bg-[#343650ff] w-full h-1/2 mt-px rounded-md shadow-xl"></span>
          </div>

          {/* BACK */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#343650ff] rounded-md rotate-x-180 backface-hidden shadow-xl">
            <span className="bg-[#343650ff] w-full h-1/2 rounded-md"></span>

            <h2 className="text-[#fb6087ff] text-4xl font-bold md:text-5xl absolute">
              {padded}
            </h2>

            <span className="bg-[#343650ff] w-full h-1/1 mt-px rounded-md shadow-xl"></span>
          </div>
        </div>
      </div>

      <p className="text-white mt-4 tracking-[5px] text-[8px] text-center md:text-[12px]">
        {label}
      </p>
    </div>
  );
}
