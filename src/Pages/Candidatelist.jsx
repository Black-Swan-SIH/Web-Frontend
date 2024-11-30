import React, { useEffect, useRef, useState } from "react";
import "./Candidatelist.css";
import node from "../assets/node.jpg";
import data from "../data.jsx";
import Heading from "../components/Heading.jsx";
import Itemcount from "../components/Itemcount";
import Userlist from "../components/Userlist.jsx";
import Button from "../components/Button.jsx";

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
};

const Candidatelist = () => {
  const currentYear = new Date().getFullYear();
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState(""); // State to track selected sort option
  const [ageRange, setAgeRange] = useState("all"); // State to track selected age range

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

  const handleFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.select(); // Select all text when clicked
    }
  };

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
    })
    const sortedData = filteredData.sort((a, b) => {
      if (sortOption === "name") {
        return `${a.first_name} ${a.last_name}`.localeCompare(
          `${b.first_name} ${b.last_name}`
        );
      }
      // if (sortOption === "age") {
      //   return a.age - b.age;
      // }
      if (sortOption === "time-asc") {
        const timeA = new Date(`1970-01-01T${a.time}Z`);
        const timeB = new Date(`1970-01-01T${b.time}Z`);
        return timeA - timeB;
      }
      if (sortOption === "time-desc") {
        const timeA = new Date(`1970-01-01T${a.time}Z`);
        const timeB = new Date(`1970-01-01T${b.time}Z`);
        return timeB - timeA;
      }
      return 0;
    });
    if (sortOption === "time-asc") {
      sortedData.reverse();
    } else if (sortOption === "time-desc") {
      sortedData.reverse();
    }
  return (
    <div className="cont">
      <div className="head">
        <Heading fontSize="48px" fontWeight="600">
          Candidates
        </Heading>
        <div className="items">
          <Itemcount head="Total Experts" value={formatNumber(total)} />
          <Itemcount head="Male" value={formatNumber(maleCount)} />
          <Itemcount head="Female" value={formatNumber(femaleCount)} />
        </div>
      </div>
      <div className="boxes">
        <div className="search-box">
          <span className="search-prefix">
            <i className="fas fa-search" style={{ fontSize: "20px" }}></i>{" "}
          </span>
          <div className="searchkk">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={handleFocus}
            />
            <Button bgcolor="rgba(190, 190, 190, 1)" color="black" padding="5px 12px">
              Ctrl+K
            </Button>
          </div>
        </div>
        <div className="sorting">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="sort-dropdown"
          >
            <option value="">Sort By</option>
            <option value="time-asc">Newest</option>
            <option value="time-desc">Oldest</option>
          </select>
          <select
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
            className="sort-dropdown-all"
          >
            <option value="all">All</option>
            <option value="18-20">18-20</option>
            <option value="21-30">21-30</option>
            <option value="31-40">31-40</option>
          </select>
        </div>
      </div>
      <div className="my-2 w-[70%] h-1 bg-gray-400 mx-auto"></div>
      <div className="scrollable-container">
        <div className="person-list">
          {sortedData.map((person) => (
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
