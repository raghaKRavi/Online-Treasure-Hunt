import React from "react";

import "./UserPage.css";

const UserHomePage = () => {
  return (
    <div className="userpage-body">
      <div className="sideNav">
        <ul>
          <li>
            <a href="#" title="Home">
              HOME
            </a>
          </li>
          <li>
            <a href="#" title="Home">
              HOME
            </a>
          </li>
          <li>
            <a href="#" title="Home">
              HOME
            </a>
          </li>
        </ul>
      </div>

      <main>
        <div className="personalhunt-box">
          <h2>Personal Hunt</h2>
        </div>
        <div className="createhunt-box">
          <h2>Create Hunt</h2>
        </div>
        <div className="activehunt-box">
          <h2>Active Hunt</h2>
        </div>
      </main>
    </div>
  );
};

export default UserHomePage;
