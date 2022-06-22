import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./profileF.css";
const ProfileFrag = () => {
  return (
    <div>
      <div className="">
        <p>View</p>
        <hr></hr>
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>John Doe</th>
          </tr>
          <tr>
            <td>Sex</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>Brazil</td>
          </tr>
          <tr>
            <td>City</td>
            <td>Addis-Ababa</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>Model</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>24</td>
          </tr>

          {/* <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
 
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>

  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
 
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>

  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
  
  </tr> */}
        </table>
      </div>
    </div>
  );
};

export default ProfileFrag;
