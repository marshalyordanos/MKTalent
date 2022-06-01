import { useContext, useState } from "react";
import "./write.css";


import { Form, Input, Button, Select, Radio } from "antd";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../../../api/api";

import WritePost from "../write/WritePost";
import { getAllblogPost } from "../../../redux/blogpostReducer";
import Jobs from '../../../jobs/PostJobs'
export default function Write() {
  const [title, setTitle] = useState("");

  const [file, setFile] = useState(null);
  const [urls, setUrls] = useState([]);
  const { TextArea } = Input;

  const { Option } = Select;
  const handleSubmit = async (e) => {

    };
    

    const [fileList, setFileList] = useState([]);
    const postData = useSelector((state) => state.blogPostData);
    const data10 = useSelector((state) => state.userAuth.data);
  
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log("kkkkkkkkkkkkkkkkssssssssss", fileList);
    const [desc, setDescription] = useState("");
    console.log(fileList);
    //   const [files, setFiles] = useState([]);
  
    const [form] = Form.useForm();
    const [tags, setTags] = useState("");
    const [mediaType, setMediaType] = useState("images");
    const onFinish = (values) => {
      console.log(values);
    };
  return (
   <Jobs/>
    // <div className="write">
   
    //    {mediaType == "images" && (
    //                 <WritePost fileList={fileList} setFileList={setFileList} />
    //               )}
    //   <form className="writeForm" onSubmit={onFinish}>
    //     <div className="writeFormGroup">
         
        
    //       <input
    //         type="text"
    //         placeholder="Title"
    //         className="writeInput"
    //         autoFocus={true}
    //         onChange={e=>setTitle(e.target.value)}
    //       />
    //     </div>
    //     <div className="writeFormGroup">
    //       <textarea
    //         placeholder="Tell your story..."
    //         type="text"
    //         className="writeInput writeText"
    //         onChange={(e) => setDescription(e.target.value)}
    //       ></textarea>
    //     </div>
    //     <Button  disabled={fileList.length == 0}
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 const formData = new FormData();
    //                 formData.append("title", title);
    //                 formData.append("desc", desc);
    //                 fileList.forEach((file) => {
    //                   console.log("pppppppppppppppppppppp", file);
    //                   formData.append("photo", file);
    //                 });
    //                 api.post("/blogposts/createpost", formData, {
    //                   headers: {
    //                     "Access-Control-Allow-Origin": true,
    //                     authorization: `Bearer ${data10.token}`,
    //                   },
    //                 });
    //                 const data = {
    //                   title:title,
    //                   desc: desc,
    //                   images: fileList.map((file) => file.name),
                  
    //                   user: { username: data10.data.username },
    //                 };
    //                 setTitle("");
    //                 setDescription("");
    //                 dispatch(
    //                   getAllblogPost({
    //                     ...postData,
    //                     posts: [...postData.posts, data],
    //                   })
    //                 );

    //                 navigate("/blog");}} type="submit">
    //       Publish
    //     </Button>
    //   </form>
    // </div>
 
  );
}
