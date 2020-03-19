import React, { useState } from "react";
import { Link } from "react-router-dom";

// Bootstrap and css import
import "../css/UserPageStyle.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

// Import from local
import ButtonComponent from "../components/ButtonComponent";
import ActiveHuntCarousel from "../components/ActiveHuntCarousel";
import PersonalHunt from "../components/PersonalHunt";

import ModalBox from "../components/ModalBox";
// import PhotoBanner from "../components/PhotoBanner";
import picture1 from "../img/art-box.jpg";
import picture3 from "../img/scroll.jpg";
import picture2 from "../img/adventure.jpg";
import LeaderBoard from "./LeaderBoard";

const UserPage = () => {
  return (
    <div className="userpage-body">
      {/* NavBar */}
      <Navbar expand="lg" className="userpage-navbar">
        <div className="container">
          <div className="navbar-header">
            <Navbar.Brand href="#home" className="users-logo">
              <svg
                width="50"
                height="40"
                viewBox="0 0 249 304"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M197.483 0C183.825 0.0170567 170.73 6.03367 161.071 16.7298C151.413 27.4259 145.98 41.9281 145.965 57.0549V95.0899H103.035V57.0549C102.965 41.9738 97.5065 27.5369 87.8527 16.9002C78.199 6.26347 65.1351 0.292437 51.5174 0.292437C37.8997 0.292437 24.8359 6.26347 15.1821 16.9002C5.52829 27.5369 0.0697929 41.9738 0 57.0549V247.238C0.0697929 262.319 5.52829 276.755 15.1821 287.392C24.8359 298.028 37.8997 304 51.5174 304C65.1351 304 78.199 298.028 87.8527 287.392C97.5065 276.755 102.965 262.319 103.035 247.238V228.219L85.8621 218.71V247.238C85.8621 254.761 83.8478 262.115 80.0737 268.37C76.2998 274.625 70.9357 279.5 64.6599 282.379C58.3839 285.257 51.4782 286.011 44.8157 284.544C38.1534 283.075 32.0336 279.453 27.2304 274.133C22.4272 268.814 19.1561 262.035 17.831 254.658C16.5061 247.278 17.1864 239.631 19.7861 232.68C22.3858 225.731 26.7882 219.789 32.4365 215.61C38.0847 211.431 44.7252 209.201 51.5181 209.201H197.483C204.277 209.201 210.917 211.431 216.564 215.612C222.213 219.791 226.615 225.731 229.214 232.682C231.814 239.632 232.494 247.28 231.168 254.658C229.843 262.037 226.573 268.814 221.769 274.133C216.966 279.453 210.847 283.076 204.183 284.544C197.521 286.011 190.616 285.257 184.339 282.379C178.064 279.5 172.7 274.625 168.926 268.37C165.153 262.115 163.138 254.761 163.138 247.238V228.219L145.965 218.71V247.238C146.036 262.319 151.493 276.755 161.147 287.392C170.801 298.028 183.866 304 197.482 304C211.1 304 224.164 298.028 233.818 287.392C243.472 276.755 248.93 262.319 249 247.238V57.0549C248.985 41.9284 243.552 27.4264 233.894 16.7303C224.237 6.03424 211.142 0.0174533 197.483 0ZM163.138 57.0549C163.138 49.5318 165.152 42.1777 168.926 35.9224C172.7 29.6672 178.063 24.7917 184.339 21.9125C190.614 19.0335 197.52 18.28 204.183 19.7474C210.845 21.2149 216.965 24.8374 221.769 30.1569C226.573 35.4763 229.843 42.2538 231.168 49.6322C232.494 57.0107 231.814 64.6586 229.214 71.6089C226.615 78.5592 222.212 84.4999 216.565 88.6794C210.917 92.859 204.277 95.0899 197.483 95.0899H163.138V57.0549ZM51.5181 19.0183C60.6237 19.0302 69.3532 23.0415 75.7917 30.1722C82.2301 37.3028 85.8517 46.9707 85.8621 57.0549V95.0899H51.5181C46.9897 95.1214 42.5005 94.1607 38.3086 92.2634C34.1168 90.366 30.3051 87.5692 27.0931 84.0343C23.8809 80.4992 21.3316 76.2955 19.5922 71.6651C17.8527 67.0349 16.9571 62.0692 16.9571 57.0541C16.9571 52.039 17.8527 47.0734 19.5922 42.443C21.3316 37.8126 23.8809 33.6089 27.0931 30.0738C30.3051 26.5389 34.1168 23.7421 38.3086 21.8448C42.5005 19.9474 46.9897 18.9869 51.5181 19.0183ZM197.483 190.179H51.5181C38.838 190.167 26.6031 195.355 17.1727 204.743V99.5439C26.6032 108.931 38.8382 114.119 51.5181 114.107H197.483C210.163 114.119 222.398 108.931 231.827 99.5439V204.743C222.398 195.355 210.163 190.167 197.483 190.179Z"
                  fill="#142630"
                />
              </svg>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="mr-auto">
            <Nav>
              <Nav.Link href="#home" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <Form inline className="ml-auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <ButtonComponent
                label={"search"}
                variant="outline-dark"
                className="search-button"
              />
            </Form>
            <Dropdown className="dropdown-button">
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/*  */}
      {/* body container */}

      <div className="section-1">
        <div className="left-section">
          <div className="personalhunt-section">
            <PersonalHunt />
            <Link to="/createhunt">
              <i className="fa fa-plus-circle plus-icon"></i>
            </Link>
            <h3> Create Hunts </h3>
          </div>
        </div>

        <div className="right-section">
          <LeaderBoard />
        </div>
      </div>

      <div className="active-hunt">
        <h2>Active Hunts</h2>
        <ActiveHuntCarousel />
      </div>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
      <p>asdasdasdasdasdas</p>
    </div>
  );
};

export default UserPage;
