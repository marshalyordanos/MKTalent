import React, { useState } from "react";
import styled from "styled-components";
const VedioPost = ({ setFileList, fileList, setVideo }) => {
  const [urls, setUrls] = useState([]);

  return (
    <ImagePostStyle className="my-4 ml-12 flec flex-col">
      <label>
        <div className="uplodImgLable">
          <div className=" text-3xl text-slate-400 ">+</div>
          <p>Upload</p>
        </div>
        <input
          onChange={(e) => {
            setFileList(e.target.files[0]);
            console.log(
              "]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]",
              URL.createObjectURL(e.target.files[0])
            );
            setUrls(URL.createObjectURL(e.target.files[0]));
          }}
          style={{ display: "none" }}
          type="file"
          accept="image/*"
        />
      </label>
      <input
        type={"file"}
        onChange={(e) => setVideo(e.target.files[0])}
        accept="video/*"
      />
    </ImagePostStyle>
  );
};
const ImagePostStyle = styled.div`
  display: flex;
  label {
    margin: 15px;
  }
  .uplodImgLable {
    border: 1px solid lightgray;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export default VedioPost;
