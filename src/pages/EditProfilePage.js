import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { Spinner, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Container } from "reactstrap";
import { Form, FormGroup, Label, Input, Table } from "reactstrap";
import "./editprofilepage.css";
import profilepic from "../assets/page/profile.png";
import Defaultpic from "../assets/page/ProfileImage.jpg";
import DefaultCoverpic from "../assets/page/coverpic.png";
import api from "../api/api";
import { useDispatch, useSelector } from "react-redux";
const EditProfilePage = () => {
  const [urls, setUrls] = useState([]);
  const [urls2, setUrls2] = useState([]);
  const profileId = useParams().id;
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  console.log("???????????????????????????????????????????????", image1);
  const [user, setUsers] = useState([]);
  const { data: userData } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const navigate = useNavigate();
  const [value, setValue] = useState({
    talentType: user.talentType,
    firstName: user.firstName,
    lastName: user.lastName,
    middleName: user.middleName,
    bio: user.bio,
    birthDate: user.birthDate,
    country: user.country,
    city: user.city,
    twitter: user.twitter,
    facebook: user.facebook,
    instagram: user.instagram,
    linkdin: user.linkdin,
    telegram: user.telegram,
  });
  console.log("qqqqqqqqqqqqqqqqqqqqqq", email, userData.data);
  useEffect(() => {
    const feachData = async () => {
      const users = await api.get(`/profile/${profileId}`, {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      });
      console.log("marshalwwwwwwwwwwwwww", users.data.data);
      setUsers(users.data.data);
    };
    feachData();
  }, []);
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("talentType", value.talentType);
    formData.append("firstName", value.firstName);
    formData.append("lastName", value.lastName);
    formData.append("middleName", value.middleName);
    formData.append("bio", value.bio);

    formData.append("country", value.country);
    formData.append("city", value.city);
    formData.append("twitter", value.twitter);
    formData.append("facebook", value.facebook);
    formData.append("instagram", value.instagram);
    formData.append("linkdin", value.linkdin);
    formData.append("telegram", value.telegram);
    if (value.birthDate) {
      formData.append("birthDate", value.birthDate);
    }
    if (image1) {
      formData.append("profileImage", image1);
    }
    if (image2) {
      formData.append("coverImage", image2);
    }

    const res = await api.patch(`/profile/${user._id}`, formData, {
      headers: {
        "Access-Control-Allow-Origin": true,
        authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
      },
    });

    const res1 = await api.patch(
      `/users/updateMe`,
      { username: username, email: email },
      {
        headers: {
          "Access-Control-Allow-Origin": true,
          authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
        },
      }
    );

    // if (email) {
    //   const res = await api.patch(
    //     `/users/updateMe`,
    //     { email: email },
    //     {
    //       headers: {
    //         "Access-Control-Allow-Origin": true,
    //         authorization: `Bearer ${userData.token}`, /////////////////////////////////////////////////////////////////////////////////
    //       },
    //     }
    //   );
    // }
    navigate(`/profile/${userData.data._id}/activity/personal`);
    // if (mediaType == "images") {
    //   const data = {
    //     tag: tags,
    //     likes: [],
    //     description: description,
    //     images: res.data.data.images.map((file) =>
    //       console.log(
    //         "ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
    //         file
    //       )
    //     ),
    //     comments: [],
    //     user: { username: data10.data.username },
    //   };
    //   setTags("");
    //   setDescription("");
    //   dispatch(
    //     getAllPost({
    //       ...postData,
    //       posts: [...postData.posts, data],
    //     })
    //   );

    //   navigate("/main");
    // }
  };
  return (
    <div>
      <Container className="container_job maincontainer">
        <Form id="useredit" method="post">
          <br></br> <br></br>
          <h1>Edit your profile</h1>
          <hr></hr>
          <br></br>
          <div className="minicontainer">
            <h3>Profile Picture</h3>
            <hr></hr>
            <FormGroup>
              <div className="profilepicdiv ">
                <div className="imagediv">
                  {urls.length !== 0 ? (
                    <img className="image" src={urls[0]} />
                  ) : (
                    <img
                      className="image"
                      src={`/assets/img/profile/${user.profileImage}`}
                    />
                  )}
                </div>
                <div className=" contains">
                  <Label for="profilepic" className="changephoto">
                    Update Photo
                  </Label>
                  <Input
                    type="file"
                    name="profilepic"
                    accept="image/*"
                    onChange={(e) => {
                      setImage1(e.target.files[0]);
                      setUrls([URL.createObjectURL(e.target.files[0])]);
                    }}
                    id="profilepic"
                    style={{ display: "none" }}
                  />
                </div>

                <div className="contains felx justify-end">
                  <Label for="talenttype">Talent Type</Label>
                  <Input
                    type="text"
                    name="talentType"
                    id="talenttype"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    placeholder="Model"
                    // onChange={}
                  />
                </div>
              </div>
              <h5>Cover Picture</h5>
              <hr></hr>
              <div className="profilepicdiv ">
                <div className="imagedivcover">
                  {urls2.length !== 0 ? (
                    <img className="image" src={urls2[0]} />
                  ) : (
                    <img
                      className="image"
                      src={`/assets/img/profile/${user.coverImage}`}
                    />
                  )}
                </div>
                <div className=" contains">
                  <Label for="coverpic" className="changephoto">
                    Update cover Photo
                  </Label>
                  <Input
                    type="file"
                    name="coverpic"
                    accept="image/*"
                    onChange={(e) => {
                      setImage2(e.target.files[0]);
                      setUrls2([URL.createObjectURL(e.target.files[0])]);
                    }}
                    id="coverpic"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Password Change</h3>
            <hr></hr>
            <div className="flex justify-end mr-6 ">
              <Link to={"/profile/edit/password"}>
                <Button className="button_login bg-success">
                  Change Password
                </Button>
              </Link>
            </div>
          </div>
          <div className="minicontainer">
            <h3>Basic Information</h3>
            <hr></hr>

            <FormGroup>
              <Label for="fname"> First Name</Label>
              <Input
                type="text"
                name="firstName"
                id="fname"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
                placeholder={user.firstName}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="mname"> Middle Name</Label>
              <Input
                type="text"
                name="middleName"
                id="mname"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
                placeholder={user.middleName}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lname"> Last Name</Label>
              <Input
                type="text"
                name="lastName"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
                id="lname"
                placeholder={user.lastName}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="username"> UserName</Label>
              <Input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                placeholder={user.username}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Bio</Label>
              <Input
                type="textarea"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
                name="bio"
                id="bio"
                placeholder={user.bio || "wirte your bio "}
              />
            </FormGroup>
            <FormGroup>
              <Label for="birthdate">Birth date</Label>
              <Input
                type="date"
                name="birthDate"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
                id="birthdate"
                placeholder="Enter a your birthdate"
              />
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Address</h3>
            <hr></hr>

            <FormGroup>
              <Label for="country">Country</Label>
              <Input
                type="text"
                name="country"
                id="country"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
                placeholder={user.country}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="city">City</Label>
              <Input
                type="text"
                name="city"
                onChange={(e) =>
                  setValue({ ...value, [e.target.name]: e.target.value })
                }
                id="city"
                placeholder={user.city}
                required
              />
            </FormGroup>
          </div>
          <div className="minicontainer">
            <h3>Contact</h3>
            <hr></hr>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder={userData.data.email}
                required
              />
            </FormGroup>
            <div className="Socials">
              <h4>Social media links of the company - not required</h4>
              <hr></hr>

              <FormGroup>
                <Label for="">Twitter Address</Label>
                <Input
                  type="text"
                  name="twitter"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  id="twitter"
                  placeholder={user.twitter}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Facebook Address</Label>
                <Input
                  type="text"
                  name="facebook"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  id="facebook"
                  placeholder={user.facebook}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Instagram Address</Label>
                <Input
                  type="text"
                  name="instagram"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  id="instagram"
                  placeholder={user.instagram}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">LinkdIn Address</Label>
                <Input
                  type="text"
                  name="linkdin"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  id="linkdin"
                  placeholder={user.linkdin}
                />
              </FormGroup>
              <FormGroup>
                <Label for="">Telegram Address</Label>
                <Input
                  type="text"
                  name="telegram"
                  id="telegram"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  placeholder={user.telegram}
                />
              </FormGroup>
            </div>
          </div>
          <div className="flex justify-between minicontainer">
            <NavLink
              to={"/profile/:id"}
              className=" py-3 px-4 rounded button_login bg-info text-white"
            >
              Back
            </NavLink>
            <Button
              onClick={submitHandler}
              className="button_login bg-success"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default EditProfilePage;
