import { Description } from "@mui/icons-material";
import { Form, Input, Button, Select, Radio } from "antd";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import AudioPost from "../components/fragments/create-post/AudioPost";
import ImagesPost from "../components/fragments/create-post/ImagesPost";
import VedioPost from "../components/fragments/create-post/VedioPost";
import LayoutApp from "../components/layout/LayoutApp";
import { getAllPost } from "../redux/postReducer";

const { TextArea } = Input;

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 14 },
};
const CreatePostpage = () => {
  const [fileList, setFileList] = useState([]);
  const [video, setVideo] = useState([]);

  const postData = useSelector((state) => state.postData);
  const data10 = useSelector((state) => state.userAuth.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  console.log(
    "{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{",
    video,
    fileList
  );
  //   const [files, setFiles] = useState([]);

  const [form] = Form.useForm();
  const [tags, setTags] = useState("");
  const [mediaType, setMediaType] = useState("images");
  const onFinish = (values) => {};

  return (
    <LayoutApp sidebar={false}>
      <div className="  ">
        <div className="flex flex-col items-center">
          <h2 className="my-4">Create a Post</h2>
          <div className=" border-2  w-[800px]">
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={onFinish}
            >
              <Form.Item
                className="my-5"
                name="Tag"
                label="Tag"
                rules={[{ required: false }]}
              >
                <Input
                  className="py-3"
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Enter a tag"
                />
              </Form.Item>
              <div className="flex flex-wrap justify-center">
                {tags &&
                  tags
                    .split(" ")
                    .map(
                      (tag) =>
                        tag !== "" && (
                          <span className=" bg-slate-300 m-2  rounded-md px-3 py-2 ">
                            #{tag}
                          </span>
                        )
                    )}
              </div>
              <Form.Item label="Media type " name="size">
                <Radio.Group>
                  <Radio.Button
                    onChange={(e) => setMediaType(e.target.value)}
                    checked={true}
                    value="images"
                  >
                    Images
                  </Radio.Button>
                  <Radio.Button
                    onChange={(e) => setMediaType(e.target.value)}
                    value="video"
                  >
                    Vedio
                  </Radio.Button>
                  <Radio.Button
                    onChange={(e) => setMediaType(e.target.value)}
                    value="audio"
                  >
                    Audio
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
              <div className=" ml-12">
                <div>
                  {mediaType == "images" && (
                    <ImagesPost fileList={fileList} setFileList={setFileList} />
                  )}
                </div>
                <div>
                  {mediaType == "video" && (
                    <VedioPost
                      fileList={fileList}
                      setFileList={setFileList}
                      setVideo={setVideo}
                    />
                  )}
                </div>
                <div>
                  {mediaType == "audio" && (
                    <AudioPost fileList={fileList} setFileList={setFileList} />
                  )}
                </div>
              </div>
              <div className=" m-5">
                <Form.Item
                  name="Description"
                  label="Description"
                  rules={[{ required: false }]}
                  wrapperCol={{ offset: 0, span: 14 }}
                >
                  <TextArea
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </Form.Item>
              </div>

              <Form.Item {...tailLayout}>
                <Button
                  disabled={fileList.length == 0}
                  onClick={async (e) => {
                    e.preventDefault();

                    const formData = new FormData();
                    formData.append("tag", tags);
                    formData.append("description", description);
                    if (mediaType == "images") {
                      fileList.forEach((file) => {
                        formData.append("images", file);
                      });
                    }
                    if (mediaType == "video") {
                      formData.append("videoImage", fileList);
                      formData.append("video", video);
                    }
                    const res = await api.post("/posts", formData, {
                      headers: {
                        "Access-Control-Allow-Origin": true,
                        authorization: `Bearer ${data10.token}`, /////////////////////////////////////////////////////////////////////////////////
                      },
                    });
                    if (mediaType == "images") {
                      const data = {
                        tag: tags,
                        likes: [],
                        description: description,
                        images: res.data.data.images.map((file) =>
                          console.log(
                            "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
                            file
                          )
                        ),
                        comments: [],
                        user: { username: data10.data.username },
                      };
                      setTags("");
                      setDescription("");
                      dispatch(
                        getAllPost({
                          ...postData,
                          posts: [...postData.posts, data],
                        })
                      );

                      navigate("/main");
                    }
                    if (mediaType == "video") {
                      e.preventDefault();
                      const data = {
                        tag: tags,
                        description: description,
                        video: res.data.data.video,
                        videoImage: res.data.data.videoImage,
                        images: [],
                        comments: [],
                        likes: [],
                        user: { username: data10.data.username },
                      };
                      setTags("");
                      setDescription("");
                      dispatch(
                        getAllPost({
                          ...postData,
                          posts: [...postData.posts, data],
                        })
                      );

                      navigate("/main");
                    }
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default CreatePostpage;
