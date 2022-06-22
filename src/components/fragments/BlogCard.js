import React from "react";
// import RightSideBarUserCard from "../layout/RightSideBarUserCard";
import Postimg from "../../assets/page/profile.png";
import { useState } from "react";
// import Commentlist from "./Commentlist";
// import CreateComment from "./CreateComment";
import { PropaneSharp } from "@mui/icons-material";
import { Image } from "antd";
import styled from "styled-components";
import ChatIcon from '@mui/icons-material/Chat';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from "react-redux";

const BlogCard = (props) => {
  console.log(props.photo);
  console.log("hahahahahahaha", props); // {token:"" ,data:[]}
  const { data: userData } = useSelector((state) => state.userAuth);
//   const [comments, setComments] = useState(props.comments);
  return (
    <PostCardStyle className=" border-[1px] bg-white m-3 box-content  w-[285px] h-[auto] justify-start overflow-hidden object-cover">

      <div className=" pt-3 px-3 py-3 ">
    
        <div className="image_con w-[250px] overflow-hidden">
          {props.photo?.length == 1 && (
            <div>
              <Image.PreviewGroup>
                <Image
                  className="one_image"

                  src={`/assets/img/blogpost/${props.photo[0]}`}
                />
              </Image.PreviewGroup>
            </div>
          )}
           
        <div><h3>{props.title}</h3>

        
        </div>
   <p>Author: {props.user}</p>

        </div>
      </div>
    </PostCardStyle>
  );
};
const PostCardStyle = styled.div`
  .two {
    display: flex;
    width: 500px;
    justify-content: space-between;
  }
  .two_div {
    width: 240px;
    height: 350px;
    /* border: 5px solid red; */
  }
  .two_div img {
    object-fit: cover;
    /* margin: 5px; */
    height: 300px;
    height: 400px;
  }
  .three {
    display: grid;
    grid-template-rows: 353px 180px;

    /* grid-template-columns: auto auto; */
    width: 500px;
    justify-content: space-between;
  }
  .three_div {
    width: 246px;
    height: 180px;
    /* border: 5px solid red; */
  }
  .three_div img {
    height: 180px;
    width: 246px;
    object-fit: cover;
  }
  .three_div1 {
    width: 500px;
    grid-column: 1 / span 2;
    height: 300px;
  }
  .three_div1 img {
    object-fit: cover;
    width: 500px;
    height: 350px;
  }
  .one_image{
    height: 200px;
    width:600px;
    object-fit: cover;
    
  }
  @media screen and (max-width: 821px) {
    width: 400px;
    .image_con {
      width: 300px;

      .one_image {
        width: 300px;
      }
      .two {
        display: flex;
        width: 300px;
        justify-content: space-between;
      }
      .tow_div {
        width: 150px;
        height: 150px;
        .two_image {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
`;

export default BlogCard;
