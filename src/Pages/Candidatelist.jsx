import React, { useState } from "react";
import "./Candidatelist.css";
import Joblist from "../components/Joblist";
import node from "../assets/node.jpg";
import data from "../data.jsx";

const Candidatelist = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((person) =>
    `${person.first_name} ${person.last_name}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="cont">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      <div className="scrollable-container">
        <div className="person-list">
          {filteredData.map((person) => (
            <Joblist
              key={person.id}
              imageSrc={node}
              jobs={person.first_name}
              application={`Age: ${person.age}`}
              open={person.work}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidatelist;
