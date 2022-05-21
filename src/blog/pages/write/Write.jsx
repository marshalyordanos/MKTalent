import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";


export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);


  const handleSubmit = async (e) => {

    };
   
  return (
    <div className="write">
     <h1>this will be the place to write blogs</h1>
    </div>
  );
}
