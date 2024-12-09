import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import "./Dashboard.css";
import CandidateCount from "../components/CandidateCount";
import formatNumber from "../components/FormatNumber";
import TopExperts from "../components/TopExperts";
import node from "../assets/node.jpg";
import Button from "../components/Button";
import { FaGreaterThan } from "react-icons/fa";
import Joblist from "../components/Joblist";
import axios from "axios";

const Dashboard = () => {
  // const [total, setTotal] = useState(0);
  // const [experts, setExperts] = useState([]);
  // const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.mlsc.tech/candidate", {},{
          withCredentials: true
        });
        const data = response.data;
        console.log(data);
        // setTotal(data.total);
        // setExperts(data.experts);
        // setJobs(data.jobs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // const displayedExperts = experts.slice(0, 3);
  // const displayedJobs = jobs.slice(0, 2);

  return (
    <div className="dash">
      {/* <div className="dashboard">
        <div className="first-column">
          <Heading fontSize="40px" fontWeight="600" color="var(--text-color9)">
            Dashboard
          </Heading>
          <div className="items">
            <CandidateCount head="Candidates" value={formatNumber(total)} />
            <CandidateCount head="Experts" value={formatNumber(total)} />
            <CandidateCount head="Job Openings" value={formatNumber(total)} />
          </div>
          <div className="mt-[25px] mb-[20px]">
            <Heading
              fontSize="20px"
              fontWeight="600"
              color="var(--text-color12)"
            >
              Top Experts
            </Heading>
          </div>
          <div className="ex">
            <div>
              {displayedExperts.map((expert, index) => (
                <TopExperts
                  key={index}
                  imageSrc={expert.imageSrc || node}
                  name={expert.name}
                  expert={expert.expert}
                  score={expert.score}
                />
              ))}
              {experts.length > 3 && (
                <div className="py-5">
                  <Button
                    color="var(--text-color14)"
                    bgcolor="transparent"
                    padding="2px"
                    fontSize="12px"
                    fontWeight="500"
                    icon={
                      <FaGreaterThan
                        style={{ color: "black", fontSize: "10px" }}
                      />
                    }
                  >
                    View more
                  </Button>
                </div>
              )}
            </div>
            <div className="mx-[100px] w-0.5 h-60 bg-gray-500"></div>
          </div>
        </div>
        <div className="second-column">
          <div className="sfirst">
            <Heading
              color="var(--text-color13)"
              fontSize="13px"
              fontWeight="500"
            >
              "Either I will come back after hoisting the Tricolor, or I will
              come back wrapped in it, but I will be back for sure."
            </Heading>
            <Heading
              color="var(--text-color2)"
              fontSize="14px"
              fontWeight="600"
            >
              ~ Captain Vikram Batra, Param Vir Chakra
            </Heading>
          </div>
          <div className="rec ">
            <Heading
              color="var(--text-color12)"
              fontSize="20px"
              fontWeight="600"
            >
              Recent job openings
            </Heading>
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
                    <FaGreaterThan
                      style={{ color: "black", fontSize: "10px" }}
                    />
                  }
                >
                  Search more
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="controlcenter">
        <Heading fontSize="21px" fontWeight="600" color="var(--text-color12)">
          Control Center
        </Heading>
        <div className="flex gap-10">
          <Button
            bgcolor="rgba(222, 143, 110, 1)"
            padding="18px"
            fontSize="14px"
            fontWeight="600"
            color="var(--text-color7)"
            width="170px"
            borderRadius="8px"
          >
            View all experts
          </Button>
          <Button
            bgcolor="rgba(156, 175, 183, 1)"
            padding="18px"
            fontSize="14px"
            fontWeight="600"
            color="var(--text-color7)"
            width="170px"
            borderRadius="8px"
          >
            View all candidates
          </Button>
          <Button
            bgcolor="rgba(115, 167, 160, 1)"
            padding="18px"
            fontSize="14px"
            fontWeight="600"
            color="var(--text-color7)"
            width="170px"
            borderRadius="8px"
          >
            View all job openings
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
