import React from "react";
import PartOne from "./Home/PartOne";
import PartThree from "./Home/PartThree";

const Home = () => {
  return (
    <div className="mt-5 me-4" style={{ width: "90%" }}>
      <PartOne></PartOne>
      <PartThree></PartThree>
    </div>
  );
};

export default Home;
