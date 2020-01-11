import React from "react";
import profile from "./../assets/lape.jpeg";

const Home = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-6 header__col-1">Home stuff here</div>
        <div className="col-md-6 header__col-2">
          <img src={profile} alt="profile" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
