// import React from "react";
// import Footer from "../components/Footer"
// import Hero from "../components/Hero";
// import Banner from "../components/Banner";
// import Map from "../components/Map";
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <>
//       <Hero hero="timesHero">
//         <Banner
//           title="Opening Hours"
//           // subtitle1="Monday - Friday: 10am - 6pm"
//           // subtitle2="Saturday & Sunday: 10am - 6pm"
//           subtitle1="Monday - Friday: 10am - 7:30pm"
//           subtitle2="Saturday & Sunday: 10am - 7pm"
//           subtitle3="Last baskets 60 minutes before closing"
//         >
//         </Banner>
//       </Hero>
//       <a href="tel:01332661414">
//                             <button className="callButton">
//                                 Call us: 01332 661414
//                             </button>
//                         </a>
//           <Map />
//       <Footer />
//       </>
//   );
// };

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Map from "../components/Map";
import axios from "axios";

export default function Home() {
  const [openingTimes, setOpeningTimes] = useState([]);

  useEffect(() => {
    // Fetch opening times from Strapi API using Axios
    axios.get('http://localhost:1337/api/opening-times')
      .then(response => {
        console.log(response.data); // Check the structure of the data
        // Use response.data.data to access the array of opening times
        setOpeningTimes(response.data.data.map(item => item.attributes.OpeningTimes));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  

  // ...

  return (
    <>
      <Hero hero="timesHero">
        <Banner title="Opening Hours"
        subtitle2={openingTimes.map((time, index) => (
          <p key={index}>{time}</p>
        ))}
        subtitle3="Last baskets 60 minutes before closing"
        >
        </Banner>
      </Hero>
      <a href="tel:01332661414">
        <button className="callButton">
          Call us: 01332 661414
        </button>
      </a>
      <Map />
      <Footer />
    </>
  );
}
