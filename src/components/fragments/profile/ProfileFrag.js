import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./profileF.css";
import api from "../../../api/api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ProfileFrag = () => {
  const userId = useParams().id;
  const [profile, setProfile] = useState({});
  const data = useSelector((state) => state.userAuth.data);
  useEffect(() => {
    const featchData = async () => {
      const x = await api.get(`/profile/filter/${userId}`);

      console.log(
        ";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;00000000000000000000000000000",
        x.data.data
      );
      setProfile(x.data.data);
    };
    featchData();
  }, []);
  return (
    <div>
      <div className="">
        <p>View</p>
        <hr></hr>
        <table id="customers">
          {data.data && (
            <tr>
              <th>Username</th>
              <th>{profile.username}</th>
            </tr>
          )}
          {profile.firstName && (
            <tr>
              <td>Name</td>
              <td>{profile.firstName}</td>
            </tr>
          )}
          {profile.lastName && (
            <tr>
              <td>Last Name</td>
              <td>{profile.lastName}</td>
            </tr>
          )}

          {data.data && (
            <tr>
              <td>Sex</td>
              <td>{data.data.gender}</td>
            </tr>
          )}
          {profile.talentType && (
            <tr>
              <td>Talent type</td>
              <td>{profile.talentType}</td>
            </tr>
          )}
          {profile.country && (
            <tr>
              <td>Country</td>
              <td>{profile.country}</td>
            </tr>
          )}
          {profile.city && (
            <tr>
              <td>City</td>
              <td>{profile.city}</td>
            </tr>
          )}
          {profile.point && (
            <tr>
              <td>Point</td>
              <td>{profile.point}</td>
            </tr>
          )}
          {profile.bio && (
            <tr>
              <td>Bio</td>
              <td>{profile.bio}</td>
            </tr>
          )}

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
