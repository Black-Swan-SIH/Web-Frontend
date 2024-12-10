import React from "react";
import ExpandableDiv from "../components/keySkills";
import { useNavigate } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
import { useEffect } from 'react';


function Job({ setShowNavbar }) {

  useEffect(() => {
    // Hide navbar when this page is loaded
    setShowNavbar(false);

    // Optionally reset navbar visibility when leaving this page
    return () => {
      setShowNavbar(true); // Show navbar again if navigating away
    };
  }, [setShowNavbar]);

  const renderCircles = (count) => {
    return [...Array(count)].map((_, index) => (
      <div
        key={index}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "100%",
          backgroundColor: "grey",
        }}
      ></div>
    ));
  };

    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/candidatelist'); // Replace '/another-page' with your route
import React from "react";
import ExpandableDiv from "../components/keySkills";
import { useNavigate } from "react-router-dom";
import Navbar3 from "../components/Navbar3";
function Job() {
  const renderCircles = (count) => {
    return [...Array(count)].map((_, index) => (
      <div
        key={index}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "100%",
          backgroundColor: "grey",
        }}
      ></div>
    ));
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/candidatelist"); // Replace '/another-page' with your route
  };

  const navigate1 = useNavigate();

  const handleClick1 = () => {
    navigate1(" /expertlist"); // Replace '/another-page' with your route
  };

  return (
    <>
    <Navbar3 />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <div
          className="container mt-[-35px] pt-5 pl-5"
          style={{
            width: "91vw",
          }}
        >
          <div className="container ml-5 mt-0 pt-5 pl-5">
            <div className="container ml-5 pl-5 mt-0 pt-5">
              <div className="container ml-5 pl-5 mt-0 pt-5">
                <div className="row ml-5 pl-5 mt-5 pt-5">
                  <div
                    className="col-lg-8 col-md-12 mt-5 pt-5"
                    style={{
                      width: "45vw",
                    }}
                  >
                    <h1
                      className="bold"
                      style={{ fontSize: "40px", fontWeight: 600 }}
                    >
                      Node.js Developer
                    </h1>
                    <p
                      className="text-muted my-4"
                      style={{ fontWeight: 500, color: "#646464" }}
                    >
                      (100+ Applications)
                    </p>

                    <hr className="m-5"></hr>
                    <h3
                      className="mt-4 pt-5 pb-5"
                      style={{ fontSize: "25px", fontWeight: 550 }}
                    >
                      Job Summary
                    </h3>
                    <p
                      className="text-muted mb-5 pb-5 text-[15px]"
                      style={{
                        fontWeight: 500,
                        color: "#646464",
                      }}
                    >
                      As a Node.js Developer, I am passionate about creating
                      efficient, scalable, and robust server-side applications.
                      I specialize in building RESTful APIs, microservices, and
                      real-time solutions using Node.js, ensuring seamless
                      integration with front-end applications and databases.
                    </p>
                    <hr className="m-5"></hr>

                    <h3
                      className="mt-5 mb-5 pb-3"
                      style={{ fontSize: "25px", fontWeight: 550 }}
                    >
                      Key Skills
                    </h3>

                    <div>
                      <ul
                        style={{
                          transform: "translateX(-10px)",
                        }}
                      >
                        <li>
                          {" "}
                          <ExpandableDiv
                            name="Core development"
                            content="content"
                            borderRadius="8px"
                            padding="16px"
                            paddingLeft="10px"
                            position="relative"
                            backgroundColor="#9CAFB7"
                            cursor="pointer"
                            width="700px"
                            minWidth="700px"
                            fontSize="22px"
                            fontSize1="16px"
                          />
                        </li>
                        <li>
                          {" "}
                          <ExpandableDiv
                            name="Database Management"
                            content="content"
                            borderRadius="8px"
                            padding="16px"
                            paddingLeft="10px"
                            position="relative"
                            backgroundColor="#9CAFB7"
                            cursor="pointer"
                            width="700px"
                            minWidth="700px"
                            fontSize="22px"
                            fontSize1="16px"
                          />
                        </li>
                      </ul>
                    </div>

                    <button
                      className="btn mt-5 pt-5"
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "12px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: "10px"
                      }}
                    >
                      Apply
                    </button>
                  </div>

                  <div
                    className="col-lg-4 col-md-12 mt-5 pt-5"
                    style={{ marginTop: "50px", marginLeft:   "140px" }}
                  >
                    <div className="mt-4 mt-5 pt-5 ml-5 pl-5">
                      <ul>
                        <li>
                          Last updated on:{" "}
                          <strong>29 Oct,2024 18:46 hrs</strong>
                        </li>
                        <li>
                          Work Mode: <strong>Remote</strong>
                        </li>
                        <li>
                          Location Type: <strong>Hybrid</strong>
                        </li>
                        <li>
                          Location: <strong>Bengaluru, karnataka</strong>
                        </li>
                        <li>
                          Department: <strong>Ministry of Defense</strong>
                        </li>
                        <li>
                          Type: <strong>Internship</strong>
                        </li>
                      </ul>
                    </div>

                    <div
                      className="mt-4 mt-5 pt-5 ml-5 pl-5"
                      onClick={handleClick}
                    >
                      <h4
                        className="m-3"
                        style={{ fontSize: "25px", fontWeight: 700, transform: "translateX(-5px" }}
                      >
                        Candidates
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "4px",
                          maxWidth: "90%",
                        }}
                      >
                        {renderCircles(27)}{" "}
                        <p className="text-muted mt-2">+99 more</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Job;
