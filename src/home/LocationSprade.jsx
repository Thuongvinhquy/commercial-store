import React from "react";
import { Link } from "react-router-dom";

const title = "More Then 60,000 Customers";

const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Anton Chigurh",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "John Wick",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Jason Bourne",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Beatrix Kiddo",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Leon",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Nikita",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Deadpool",
  },
];
const LocationSprade = () => {
  return <div className="clients-section style-2 padding-tb">
    <div className="container">
        <div className="section-header text-center">
            <h2 className="title">{title}</h2>
            <p>{desc}</p>
        </div>
        {/* main content */}
        <div className="section-wrapper">
            <div className="clients">
                {
                    clientsList.map((val, i) => (
                        <div key={i} className="client-list">
                            <Link to="/sign-up" className="client-content">
                                <span>{val.text}</span>
                            </Link>
                            <div className="client-thumb">
                                <img src={val.imgUrl} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  </div>
};

export default LocationSprade;
