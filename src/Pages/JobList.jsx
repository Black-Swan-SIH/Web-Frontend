import React, { useEffect, useRef, useState } from "react";
import "./JobList.css";
import node from "../assets/node.jpg";
import data from "../data.jsx";
import Heading from "../components/Heading.jsx";
import Itemcount from "../components/Itemcount";
import Userlist from "../components/Userlist.jsx";
import formatNumber from "../components/FormatNumber.jsx";
import Boxes from "../components/Boxes.jsx";
import { handleFocus } from "../components/Functions.jsx";
import Joblist from "../components/Joblist.jsx";
import Button from "../components/Button.jsx";
import { FaGreaterThan } from "react-icons/fa";

const total = data.length;

const experts = [
  {
    imageSrc: node,
    name: "Om Rajpal",
    expert: "Flutter Developer",
    score: "85.5",
  },
  { imageSrc: node, name: "Achin", expert: "Backend Developer", score: "82.5" },
  { imageSrc: node, name: "Parth", expert: "Nothing", score: "99.5" },
  {
    imageSrc: node,
    name: "John Doe",
    expert: "React Developer",
    score: "88.0",
  },
  { imageSrc: node, name: "Jane Doe", expert: "Java Developer", score: "80.0" },
];

const jobs = [
  {
    imageSrc: node,
    backgColor: "rgba(142, 183, 168, 1)",
    jobs: "Node.js Developer",
    application: "Applications: 101",
    open: "Opened 2 Days Ago",
  },
  {
    imageSrc: node,
    backgColor: "rgba(142, 183, 168, 1)",
    jobs: "Typescript Developer",
    application: `Applications: ${formatNumber(total)}`,
    open: "Opened 1 Days Ago",
  },
  {
    imageSrc: node,
    backgColor: "rgba(142, 183, 168, 1)",
    jobs: "Python Developer",
    application: "Applications: 75",
    open: "Opened 3 Days Ago",
  },
];

const JobList = ({ head, page }) => {
  const currentYear = new Date().getFullYear();
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [ageRange, setAgeRange] = useState("all");

  const maleCount = data.filter((user) => user.gender === "Male").length;
  const femaleCount = data.filter((user) => user.gender === "Female").length;
  const searchInputRef = useRef(null);

  const displayedJobs = jobs.slice(0, 2);

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
    <div className="contuser">
      <div className="headuser flex">
        <div>
          <Heading fontSize="40px" fontWeight="600" color="var(--text-color9)">
            {head}
          </Heading>
          <div className="itemsuser">
            <Itemcount head="Jobs" value={formatNumber(total)} />
            <Itemcount head="Opened" value={formatNumber(maleCount)} />
            <Itemcount head="Closed" value={formatNumber(femaleCount)} />
          </div>
        </div>
        <div>
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
        </div>
      </div>
      <div className="my-10 botuser">
        <div className="recuser mb-5">
          <Heading color="var(--text-color12)" fontSize="20px" fontWeight="600">
            Recent job openings
          </Heading>
          <div className="py-1"></div>
          {displayedJobs.map((job, index) => (
            <Joblist
              key={index}
              imageSrc={job.imageSrc}
              backgColor={job.backgColor}
              jobs={job.jobs}
              application={job.application}
              open={job.open}
            />
          ))}
          {jobs.length > 2 && (
            <div className="py-5">
              <Button
                color="var(--text-color14)"
                bgcolor="transparent"
                fontSize="12px"
                fontWeight="500"
                icon={
                  <FaGreaterThan style={{ color: "black", fontSize: "10px" }} />
                }
              >
                View more
              </Button>
            </div>
          )}
          <div className="flex gap-10">
            <Button
              bgcolor="rgba(0,0,0,1)"
              color="white"
              fontSize="14px"
              borderRadius="10px"
              padding="7px 23px"
            >
              New Job
            </Button>
            <Button
              bgcolor="rgba(222, 143, 110, 1)"
              color="black"
              fontSize="14px"
              borderRadius="10px"
              padding="7px 23px"
            >
              Close a Job
            </Button>
          </div>
        </div>
        <div className="my-[40px] w-[0.8px] h-[255px] bg-gray-400"></div>
        <div className="">
          <Heading color="var(--text-color12)" fontSize="20px" fontWeight="600">
            All Jobs
          </Heading>
          <div className="flex flex-col py-5 gap-3">
              {jobs.map((job, index) => (
                <Joblist
                  key={index}
                  imageSrc={job.imageSrc}
                  backgColor={job.backgColor}
                  jobs={job.jobs}
                  application={job.application}
                  open={job.open}
                />
              ))}
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default JobList;
