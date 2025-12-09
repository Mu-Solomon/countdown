import { useState } from "react";
import "./App.css";
import iconFacebook from "/images/icon-facebook.svg";
import iconPinterest from "/images/icon-pinterest.svg";
import iconInstagram from "/images/icon-instagram.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[url('/images/pattern-hills.svg')]  bg-[#231d2b]  h-screen bg-bottom-right bg-no-repeat">
        <div className="bg-[url('/images/bg-stars.svg')] bg-auto flex flex-col items-center justify-around h-full">
          <div className="mt-32">
            <h1 className="text-2xl text-white uppercase font-semibold tracking-[8px] line-clamp-2 overflow-hidden text-center">
              We're launching soon
            </h1>
          </div>
          <div className="flex gap-6">
            <div>
              {" "}
              <h2 className="bg-[#343650ff] text-[#fb6087ff] text-4xl font-bold ">
                08
              </h2>{" "}
              <p className="bg-[#343650ff]">DAYS</p>{" "}
            </div>
            <div>
              {" "}
              <h2>23</h2> <p>HOURS</p>{" "}
            </div>
            <div>
              {" "}
              <h2>55</h2> <p>MINUTES</p>{" "}
            </div>
            <div>
              {" "}
              <h2>41</h2> <p>SECONDS</p>{" "}
            </div>
          </div>
          <div>
            <img src={iconFacebook} alt="facebook" />
            <img src={iconPinterest} alt="pinterest" />
            <img src={iconInstagram} alt="instagram" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
