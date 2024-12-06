import React, { useEffect, useRef, useState } from "react";
import "./Candidatelist.css";
import node from "../assets/node.jpg";
import data from "../data.jsx";
import Heading from "../components/Heading.jsx";
import Itemcount from "../components/Itemcount";
import Userlist from "../components/Userlist.jsx";
import formatNumber from "../components/FormatNumber.jsx";
import Boxes from "../components/Boxes.jsx";
import { handleFocus } from "../components/Functions.jsx";

const Candidatelist = ({ head }) => {
  const currentYear = new Date().getFullYear();
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [ageRange, setAgeRange] = useState("all");

  const total = data.length;
  const maleCount = data.filter((user) => user.gender === "Male").length;
  const femaleCount = data.filter((user) => user.gender === "Female").length;

  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        searchInputRef.current.focus();
        searchInputRef.current.select();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const filteredData = data
    .filter((person) =>
      `${person.first_name} ${person.last_name}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((person) => {
      if (ageRange === "all") return true;
      const age = currentYear - person.age;
      if (ageRange === "18-20") {
        return age >= 18 && age <= 20;
      }
      if (ageRange === "21-30") {
        return age >= 21 && age <= 30;
      }
      if (ageRange === "31-40") {
        return age >= 31 && age <= 40;
      }
      return true;
    });
  const sortedData = filteredData.sort((a, b) => {
    if (sortOption === "name") {
      return `${a.first_name} ${a.last_name}`.localeCompare(
        `${b.first_name} ${b.last_name}`
      );
    }
    if (sortOption === "time-asc") {
      const timeA = new Date(`1970-01-01T${a.time}Z`);
      const timeB = new Date(`1970-01-01T${b.time}Z`);
      sortedData.reverse();
      return timeA - timeB;
    }
    if (sortOption === "time-desc") {
      const timeA = new Date(`1970-01-01T${a.time}Z`);
      const timeB = new Date(`1970-01-01T${b.time}Z`);
      sortedData.reverse();
      return timeB - timeA;
    }
    return 0;
  });
  return (
    <div className="cont">
      <div className="head">
        <Heading fontSize="40px" fontWeight="600" color="var(--text-color9)">
          {head}
        </Heading>
        <div className="items">
          <Itemcount head="Total Experts" value={formatNumber(total)} />
          <Itemcount head="Male" value={formatNumber(maleCount)} />
          <Itemcount head="Female" value={formatNumber(femaleCount)} />
        </div>
      </div>
      <Boxes
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        sortOption={sortOption}
        onSortChange={(e) => setSortOption(e.target.value)}
        ageRange={ageRange}
        onAgeChange={(e) => setAgeRange(e.target.value)}
        searchInputRef={searchInputRef}
        handleFocus={handleFocus}
      />
      <div className="my-9 w-[60%] h-0.5 bg-gray-400 mx-auto"></div>
      <div className="scrollable-container">
        <div className="person-list">
          {sortedData.map((person, index) => (
            <Userlist
              key={person.id}
              imageSrc={node}
              name={person.first_name}
              age={currentYear - person.age}
              work={person.work}
              value={person.progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candidatelist;
