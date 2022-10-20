import { Carousel } from "bootstrap";
import React from "react";
import { Button } from "react-bootstrap";
import NavbarApp from "../navbar/Navbar";
import HomeIMg from "./img/web.jpg";
import HomedarkIMg from "./img/homeDark.jpg";
import Rewards from "./img/reward.jpg";
import Connection from "./img/connection.jpg";
import TimeImg from "./img/time.jpg";
import Past from "./img/past.jpg";
import "./homeqw.css";
import Usercard from "./UserCard/Usercard";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { data } from "autoprefixer";
const Home = (props) => {
  const light = useSelector((state) => state.mode.light);
  const navigate = useNavigate();
  const { data: userData } = useSelector((state) => state.userAuth);

  return (
    <div className={light ? "home_mk" : "home_mk home__dark_mk"}>
      {/* navbar */}
      {props.children}

      <div
        className={
          light
            ? "home__top__con__1"
            : "home__top__con__1 home__top__con__dark_mk"
        }
      >
        <div
          className={
            light
              ? "home__top_mk home__top1"
              : "home__top home__top1 home__top__dark_mk home__top1__dark_mk"
          }
        >
          <div
            className={
              light ? "home__title__mk" : "home__title__mk home__title__dark_mk"
            }
          >
            <h1>MK-TALENT is your best Choice </h1>
            <p>
              We provide many ways for you to get yourself out there and
              introduce yourself to the world. Join us and make your work
              opportunity a little Easier! Grow your portfolio by doing jobs,
              participating in events and getting rewards.
            </p>
            <Button
              onClick={() => {
                if (userData?.data?.role == "company") {
                  navigate("/company/find");
                } else if (userData?.data?.role == "admin") {
                  navigate("/admin");
                } else if (userData?.data?.role == "talent") {
                  navigate("/main");
                } else {
                  alert("Please login first!");
                }
              }}
              size="lg"
              style={{ marginTop: "30px" }}
              variant="success"
            >
              Get started
            </Button>
          </div>
          <div className="home__img">
            <img src={light ? HomeIMg : HomedarkIMg} />
          </div>
        </div>
        <div
          className={
            light
              ? "home__top_mk home__mid"
              : "home__top_mk home__mid home__top__dark_mk home__mid__dark_mk"
          }
        >
          <div className="home__img">
            <img src={Past} id="home__past" />
          </div>
          <div
            className={
              light
                ? "home__title__mk home__title5"
                : "home__title__mk home__title5 home__title__dark_mk"
            }
          >
            <h1 style={{ fontSize: "29px" }}>
              Now is your moment to build a better tomorrow
            </h1>
            <p>
              We’ve seen what the future can be. Now it’s time to decide what it
              will be.
            </p>
          </div>
        </div>
      </div>
      {/* some information */}
      <div className={light ? "home__info" : "home__info home__info__dark_mk"}>
        <div
          className={light ? "home__top2" : "home__top2 home__top2__dark_mk"}
        >
          <div
            className={
              light ? "home__title2" : "home__title2 home__title2__dark_mk"
            }
          >
            <h1>Expand your network by joining us</h1>
            <p>
              Connect with diffrent companies and grow your network. Join us and
              make your work opportunity Easier! Transform the way you work with
              one place for everyone and everything you need to get stuff done.
            </p>
            {/* <Button size='lg' style={{marginTop:"30px"}} variant="success">Get start</Button> */}
          </div>
          <div className="home__img2">
            <img src={Connection} />
          </div>
        </div>
        <div className="home__top2 home__top2__right">
          <div className="home__img2 home__img2_right">
            <img src={TimeImg} />
          </div>
          <div className="home__title2 home__title2__right">
            <h1>
              Manage Your company by recruiting the right talents you want for a
              job and focus on time{" "}
            </h1>
            <p>
              The next great talent to make your company shine could just be
              right around the corner! Transform the way you look for talents
              one place for everyone and everything you need to get stuff done.
              {/* <Button size='lg' style={{marginTop:"30px"}} variant="success">Get start</Button> */}
            </p>
          </div>
        </div>
        <div className="home__top2 home__top5">
          <div className="home__title2">
            <h1>Get Rewards </h1>
            <p>
              The more jobs you do the more experience you get which adds up to
              getting amazing rewards! OH! but wait Its not the reward that
              matters its the road you took to get there the reward is something
              extra what matters is the person you became after getting to the
              end of the road.
            </p>
            {/* <Button size='lg' style={{marginTop:"30px"}} variant="success">Get start</Button> */}
          </div>
          <div className="home__img2">
            <img src={Rewards} />
          </div>
        </div>
      </div>
      {/* how to get start */}
      <div
        className={
          light ? "home_getSatrt" : "home_getSatrt home_getSatrt__dark_mk"
        }
      >
        <h1>Get started with MK-Talent</h1>
        <div className="home__getStart__con">
          <div className="home__getStart__items">
            <Button variant="success">1</Button>
            <h3>Sign up</h3>
            <p>
              Create a new account in just a few moments. It’s completly free.
            </p>
          </div>
          <div className="home__getStart__items">
            <Button variant="success">2</Button>
            <h3>Career advancement</h3>
            <p>
              Advance your career by joining us. do jobs to get the experience
              you need.
            </p>
          </div>
          <div className="home__getStart__items">
            <Button variant="success">3</Button>
            <h3>No Third-party interference</h3>
            <p>
              The talent and talent seeker can make a deal on the job without
              any third party interference.
            </p>
          </div>
        </div>
      </div>
      {/* Developer Information */}
      {/* <div
        className={
          light ? "home__dev bg-gray-900 " : "home__dev home__dev__dark_mk"
        }
      >
        <div className="home__dev__title">
          <h1>MK-Talent Developers</h1>
          <p>Here's the developers that develop MK-TAlent </p>
        </div>
        <div className="home__card">
          <Usercard
            avatar="K"
            name="Kirubel Berhanu"
            desc="Give yourself the flexibility to work when, 
                where and how you work best.Take control
                 of notifications, collaborate live
                  or on your own time, and find answers in 
                  conversations from across your company."
          />
          <Usercard avatar="K" name="Kibrom Esayas" />
          <Usercard avatar="M" name="Marshal Yordanos" />
          <Usercard avatar="M" name="Mohammed Hussein" />
        </div>
      </div> */}
      {/* footer */}
      <div
        className={
          light ? "home__footer" : "home__footer home__footer__dark_mk"
        }
      >
        <div className="home__footer__con">
          <div className="home__footer__logo">
            {/* <NavLink>MKTALENT</NavLink> */}
            <NavLink to="/">
              <p>MK-Talent</p>
            </NavLink>
          </div>
          <div className="home__footer__community">
            <p>Community</p>
            <ul>
              <li>
                <NavLink to="/">
                  <p>Facebook</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <p>Telegram</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <p>Instagram</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <p>twitter</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="home__footer__resource">
            <p>Resources</p>
            <ul>
              <li>
                <NavLink to="/">
                  <p>Support</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <p>Blog</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="company_C">
            <p>Company</p>
            <ul>
              <li>
                <NavLink to="/">
                  <p>About</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <p>Countact Us</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
