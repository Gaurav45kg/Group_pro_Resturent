import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Team from "./components/Content/Team";
import Features from "./Pages/Features";
import FoodList from "./Pages/FoodList";
import AboutUs from "./components/AboutUs/AboutUs";
import Reservation_Form from "./components/Reservation_Form/Reservation_form";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const reservationRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "home")
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "about")
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "services")
      servicesRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "team")
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "reservation")
      reservationRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="font-oswald font-light bg-gradient-to-r from-white to-pink-200">
        <Navbar scrollToSection={scrollToSection} />
        <div ref={homeRef} className="section">
          <Content />
        </div>
      </div>
      <div ref={aboutRef} className="section">
        <AboutUs />
      </div>
      
      <div ref={servicesRef} className="section" >
        <Features />
        <FoodList />
      </div>
      <div ref={teamRef} className="section">
        <Team />
      </div>
      <div ref={reservationRef} className="section">
        <Reservation_Form />
      </div>
    </>
  );
};

export default App;
