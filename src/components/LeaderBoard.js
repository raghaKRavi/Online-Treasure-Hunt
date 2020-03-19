import React from "react";

import "../css/LeaderBoardStyle.css";
import Button from "react-bootstrap/Button";

const LeaderBoard = props => {
  return (
    <>
      <div className="leaderboard-column" style={props.style} id={props.id}>
        {/* <h2>Leader Board</h2> */}
        <Button onClick={props.onHide} className="closeButton float-right">
          <span aria-hidden="true">&times;</span>
        </Button>
        <table>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Anne</td>
            <td>50</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default LeaderBoard;
