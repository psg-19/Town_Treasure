import React, { useState } from "react";

import "../Styles/Recommendation.css";

import Destination1 from "../assets/destination1.jpg";
import Destination2 from "../assets/Majuli-River-Island-Assam-Tourist-Spots.avif";
import Destination3 from "../assets/ziro-heaven-on-earth.webp";
import Destination4 from "../assets/main-qimg-71b4808f37dc979261f92606d240a82c-lq.jpeg";
import Destination5 from "../assets/variant.jpg";
import Destination6 from "../assets/52ddf8f5-0b00-4585-9cb1-91cec27e128d.webp";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    {
      image: Destination1,
      title: "Hampi,Karnatka",
      subTitle: "This UNESCO World Heritage Site is a mesmerizing blend of history, culture, and stunning landscapes.",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Majuli, Assam",
      subTitle: "Majuli is the world's largest river island, nestled in the Brahmaputra River.",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Ziro Valley, Arunachal Pradesh",
      subTitle: "Tucked away in the eastern Himalayas, Ziro Valley is a haven for nature lovers and adventure seekers.",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Gokarna, Karnataka",
      subTitle: "While Goa attracts throngs of tourists, Gokarna remains a tranquil alternative for those seeking pristine beaches and spiritual rejuvenation.",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Khajjiar, Himachal Pradesh",
      subTitle: "Often referred to as India's Mini Switzerland, Khajjiar is a breathtaking hill station nestled amidst dense pine forests and rolling meadows. ",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Chitrakoot, Madhya Pradesh",
      subTitle: "Steeped in mythology and natural beauty, Chitrakoot is a sacred town located on the banks of the Mandakini River.",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>${item.cost}</p>
              </div>

              <div className="details">
                <p>1500 kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
