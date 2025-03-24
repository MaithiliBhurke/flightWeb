import React, {useEffect} from "react";
import paris from "../../assets/paris.jpg";
import NewYork from "../../assets/newyork.jpg";
import dubai from "../../assets/Dubai.jpg";
import london from "../../assets/london.jpg";


import traveler1 from "../../assets/traveler1.jpg";
import traveler2 from "../../assets/traveler2.jpg";
import traveler3 from "../../assets/traveler3.jpg";
import traveler4 from "../../assets/traveler4.jpg";

//import aos
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Isha",
    socialLink: "@isha",
  },
  {
    id: 2,
    destinationImage: NewYork,
    travelerImage: traveler2,
    travelerName: "Wilson Lindsey",
    socialLink: "@wilson",
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler3,
    travelerName: "Nicole Web",
    socialLink: "@nicoleweb",
  },
  {
    id: 4,
    destinationImage: london,
    travelerImage: traveler4,
    travelerName: "Sofia",
    socialLink: "@sofia",
  },
];

const Travelers = () => {

//useEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="travelers container section">
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>

        <div className="travelersContainer grid">
          {/* Single passenger card */}
          {/* <div className="singleTraveler">
            <img src={paris} className="destinationImage" alt="" />

            <div className="travelerDetails">
              <div className="travelerPicture">
                <img src={traveler1} className="travelerImage" alt="" />
              </div>
              <div className="travelerName">
                <span>Isha</span>
                <p>@isha</p>
              </div>
            </div>
          </div> */}

          {travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink}) => {
            return (
              <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                <img src={destinationImage} className="destinationImage" alt="" />

                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className="travelerImage" alt="" />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
