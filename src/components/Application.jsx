import React from "react";
import "../styles/application.css"

const Application = ({profileScore, pronouns, age, topSkill, Name}) => {
  return (
    <div id="main">
      <div className="picture"></div>
      <h1>{Name}</h1>
      <div className="flex flex-col justify-start items-center">
        <div className="row">
          <div className="flex">
            <p className="key">Profile Score:</p>
            <p className="value">{profileScore}</p>
          </div>

          <div className="flex">
            <p className="key">Pronouns:</p>
            <p className="value">{pronouns}</p>
          </div>
        </div>
        <div className="row">
          <div className="flex">
            <p className="key">Age:</p>
            <p className="value">{age}</p>
          </div>

          <div className="flex">
            <p className="key">Top Skill:</p>
            <p className="value">{topSkill}</p>
          </div>
        </div>
      </div>
      <div>
        <button className="button" id="approve">Approve</button>
        <button className="button" id="reject">Reject</button>
      </div>
    </div>
  );
};

export default Application;
