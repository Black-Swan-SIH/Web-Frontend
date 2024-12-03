import React from "react";
import Heading from "../components/Heading";
import "./Dashboard.css";
import CandidateCount from "../components/CandidateCount";
import data from "../data";
import formatNumber from "../components/FormatNumber";
import TopExperts from "../components/TopExperts";
import node from "../assets/node.jpg";
import Button from "../components/Button";
import { FaGreaterThan } from "react-icons/fa";
import Joblist from "../components/Joblist";

const total = data.length;

const experts = [
  { imageSrc: node, name: "Om Rajpal", expert: "Flutter Developer", score: "85.5" },
  { imageSrc: node, name: "Achin", expert: "Backend Developer", score: "82.5" },
  { imageSrc: node, name: "Parth", expert: "Nothing", score: "99.5" },
  { imageSrc: node, name: "John Doe", expert: "React Developer", score: "88.0" },
  { imageSrc: node, name: "Jane Doe", expert: "Java Developer", score: "80.0" },
];

const jobs = [
  { imageSrc: node, backgColor: "rgba(142, 183, 168, 1)", jobs: "Node.js Developer", application: "Applications: 101", open: "Opened 2 Days Ago" },
  { imageSrc: node, backgColor: "rgba(142, 183, 168, 1)", jobs: "Typescript Developer", application: `Applications: ${formatNumber(total)}`, open: "Opened 1 Days Ago" },
  { imageSrc: node, backgColor: "rgba(142, 183, 168, 1)", jobs: "Python Developer", application: "Applications: 75", open: "Opened 3 Days Ago" },
];

const Dashboard = () => {
  const displayedExperts = experts.slice(0, 3); // Limit to 3 experts
  const displayedJobs = jobs.slice(0, 2); // Limit to 2 job listings

  return (
    <div className="dash">
      <div className="dashboard">
        <div className="first-column">
          <Heading fontSize="32px" fontWeight="600">
            Dashboard
          </Heading>
          <div className="items">
            <CandidateCount head="Candidates" value={formatNumber(total)} />
            <CandidateCount head="Experts" value={formatNumber(total)} />
            <CandidateCount head="Job Openings" value={formatNumber(total)} />
          </div>
          <div className="my-7">
            <Heading fontSize="20px" fontWeight="600" color="rgba(66, 66, 66, 1)">
              Top Experts
            </Heading>
          </div>
          <div className="ex">
            <div>
              {displayedExperts.map((expert, index) => (
                <TopExperts
                  key={index}
                  imageSrc={expert.imageSrc}
                  name={expert.name}
                  expert={expert.expert}
                  score={expert.score}
                />
              ))}
              {experts.length > 3 && (
                <div className="py-2">
                  <Button
                    color="grey"
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
            <div className="mx-9 w-0.5 h-56 bg-gray-500"></div>
          </div>
        </div>
        <div className="second-column">
          <div className="sfirst">
            <Heading
              color="rgba(113, 113, 113, 1)"
              fontSize="13px"
              fontWeight="500"
            >
              "Either I will come back after hoisting the Tricolor, or I will
              come back wrapped in it, but I will be back for sure."
            </Heading>
            <Heading
              color="rgba(13, 13, 13, 1)"
              fontSize="14px"
              fontWeight="600"
            >
              ~ Captain Vikram Batra, Param Vir Chakra
            </Heading>
          </div>
          <div className="rec">
            <Heading
              color="rgba(66, 66, 66, 1)"
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
              <div className="py-2">
                <Button
                  color="grey"
                  bgcolor="transparent"
                  fontSize="12px"
                  fontWeight="500"
                  icon={
                    <FaGreaterThan style={{ color: "black", fontSize: "10px" }} />
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
        <Heading fontSize="22px" fontWeight="600">
          Control Center
        </Heading>
        <div className="flex gap-12">
          <Button
            bgcolor="rgba(222, 143, 110, 1)"
            padding="18px"
            fontSize="14px"
            fontWeight="600"
            color="rgba(39, 39, 39, 1)"
            width="170px"
            borderRadius="8px"
          >
            View all experts
          </Button>
          <Button
            bgcolor="rgba(156, 175, 183, 1)"
            padding="2px"
            fontSize="14px"
            fontWeight="600"
            color="rgba(39, 39, 39, 1)"
            width="170px"
            borderRadius="8px"
          >
            View all candidates
          </Button>
          <Button
            bgcolor="rgba(115, 167, 160, 1)"
            padding="2px"
            fontSize="14px"
            fontWeight="600"
            color="rgba(39, 39, 39, 1)"
            width="170px"
            borderRadius="8px"
          >
            View all job openings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
