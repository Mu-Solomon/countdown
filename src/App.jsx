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
        <div className="bg-[url('/images/bg-stars.svg')] bg-contain flex flex-col items-center justify-around h-full">
          <div className="mt-32">
            <h1 className="text-4xl text-white">We're launching soon</h1>
          </div>
          <div>
            <div>
              {" "}
              <h2>08</h2> <p>DAYS</p>{" "}
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
