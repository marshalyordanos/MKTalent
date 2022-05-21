import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import "./singlePost.css";

export default function SinglePost() {



  const handleDelete = async () => {
    try {
 
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {

      
   
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
       
          
              </div>
         
       
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
           
          </span>
          <span className="singlePostDate">
            
          </span>
        </div>
       
      </div>

  );
}
