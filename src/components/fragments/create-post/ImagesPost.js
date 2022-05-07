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
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export default ImagesPost;

// import React, { useState } from "react";
// import { Upload } from "antd";
// import ImgCrop from "antd-img-crop";
// const ImagesPost = ({ fileList, setFileList }) => {
//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };

//   const onPreview = async (file) => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise((resolve) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow.document.write(image.outerHTML);
//   };

//   return (
//     <ImgCrop rotate>
//       <Upload
//         listType="picture-card"
//         fileList={fileList}
//         action="http://127.0.0.1:8000/api/v1/posts"
//         headers={{
//           authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzEyZDM4NzM0MjRkNGY0NDY3NDM4MSIsImlhdCI6MTY1MTU4NzAzNCwiZXhwIjoxNjU0MTc5MDM0fQ.xPYr-RXrRmduSTJ-6eB54d-fGLaHIiezuTDD9R9YXLU`,
//         }}
//         onPreview={onPreview}
//       >
//         {fileList.length < 3 && "+ Upload"}
//       </Upload>
//     </ImgCrop>
//   );
// };

// export default ImagesPost;
