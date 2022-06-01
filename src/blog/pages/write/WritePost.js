import { CancelOutlined } from "@mui/icons-material";
import { Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
const ImagesPost = ({ fileList, setFileList }) => {
  const [urls, setUrls] = useState([]);
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");

  return (
    <ImagePostStyle>
      <div className="flex">
        {urls.map((url, i) => {
          return (
            <div className=" relative">
              <img
                key={i}
                src={url}
                alt="noimage"
                className=" object-cover w-[150px] h-[150px] m-3 "
              />
              <div className=" absolute top-0  right-0 z-20">
                <Button
                  onClick={() => {
                    const x = [...urls];
                    const y = [...fileList];

                    x.splice(i, 1);
                    y.splice(i, 1);

                    setUrls(x);
                    setFileList(y);
                  }}
                >
                  <CancelOutlined />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {urls.length < 3 && (
        <label>
          <div className="uplodImgLable">
            <div className=" text-3xl text-slate-400 ">+</div>
            <p>Upload</p>
          </div>
          <input
            onChange={(e) => {
              setFileList([...fileList, e.target.files[0]]);
              setUrls([...urls, URL.createObjectURL(e.target.files[0])]);
            }}
            style={{ display: "none" }}
            type="file"
            accept="image/*"
          />
        </label>
      )}
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
    width: 80px;
    height: 80px;
    display: flex;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default ImagesPost;


