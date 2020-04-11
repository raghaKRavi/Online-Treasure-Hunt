import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../css/UserHomePageStyle.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

import ButtonComponent from "../components/ButtonComponent";
import avatar from "../logo/avatar/avatar.png";
import LeaderBoard from "./LeaderBoard";
import PersonalHunt from "./PersonalHunt";
import ActiveHuntCarousel from "../components/ActiveHuntCarousel";

const UserHomePage = () => {
  const [scoreBoard, setScoreBoard] = useState(false);

  function hideMe() {
    setScoreBoard(false);
  }

  let style = { display: "block" };
  let leaderBoardWidth = { width: "290px" };
  let groupIconStyle = { display: "none" };
  let showBoardButtonStyle = { display: "block" };

  if (!scoreBoard) {
    style.display = "none";
    leaderBoardWidth.width = "";
    groupIconStyle.display = "";
    showBoardButtonStyle.display = "";
  }

  return (
    <>
      <div className="userHome-body">
        <div className="side-navbar">
          <ul>
            <li>
              <a className="active" href="#" title="Home">
                <i class="fa fa-home" id="sidenav-icon"></i>
              </a>
            </li>
            <li>
              <a href="#" title="Active Hunts">
                <i
                  class="fa fa-puzzle-piece sidenav-icon"
                  id="sidenav-icon"
                ></i>
              </a>
            </li>
            <li>
              <a href="#" title="Personal Hunts">
                {" "}
                <i
                  class="fa fa-archive sidenav-icon"
                  id="sidenav-icon"
                ></i>{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="content-section">
          <div className="top-navbar">
            <Navbar className="bg-dark justify-content-between">
              <Form inline>
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <ButtonComponent
                  label={"search"}
                  variant="outline-light"
                  className="search-button"
                />
              </Form>

              <div className="userdetails">
                <h3>User Name</h3>

                <div className="profile-avatar">
                  <Dropdown alignRight="false">
                    <Dropdown.Toggle variant="none" id="id=" dropdown-basic>
                      <img src={avatar} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        <i className="fa fa-gears font-awesome-icon"></i>
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#/action-2">
                        <i className="fa fa-sign-out font-awesome-icon"></i>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </Navbar>
          </div>
          {/* top nav end */}

          {/* leader-board popup */}
          <div className="leaderboard-popup" style={leaderBoardWidth}>
            <i className="fa fa-group group-icon" style={groupIconStyle}></i>
            <h4 className="leaderboard-name">Leader Board</h4>
            <Button
              classname="showBoard-button"
              id="board-button"
              variant="none"
              style={showBoardButtonStyle}
              onClick={() => setScoreBoard(true)}
            >
              <i className="fa fa-toggle-down toggleDownButton"></i>
            </Button>
          </div>
          <LeaderBoard id="scoreBoard-info" style={style} onHide={hideMe} />
          {/* leaderboard ends here */}

          {/* introduction text and svg*/}

          <div className="intro-section">
            <div className="intro-text">
              <h2>Hello</h2>
            </div>
          </div>

          {/* end of introduction text */}

          {/* personal hunt begin */}
          <div className="personalhunt-container">
            <div className="personalhunt-description">
              <h2> You Can Create a New Hunt or Join in Existing Hunts</h2>
              <div className="personalhunt-collections">
                <PersonalHunt />
              </div>
            </div>
            <div className="create-personalhunt">
              <Link to="/createhunt">
                <i className="fa fa-plus-circle createHunt-icon">
                  <h3>Create New Hunt</h3>
                </i>
              </Link>
            </div>
          </div>
          {/* Personal Section End */}

          <div className="active-hunts">
            <ActiveHuntCarousel />
          </div>
        </div>
        {/* content Section End */}
      </div>
    </>
  );
};

export default UserHomePage;
