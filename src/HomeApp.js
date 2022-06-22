import React from "react";

import Home from "./components/home/Home";
import Register from "./components/registration/Register";
import MoreInformation from "./components/registration/moreInformation/MoreInformation";
import ModelRegistration from "./components/registration/modelRegistration/ModelRegistration";
import NavbarApp from "./components/navbar/Navbar";
import Model from "./utils/Model";
import Login from "./components/login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/LayoutApp";
import UserRoutes from "./routes/UserRoutes";
import Posts from "./pages/Posts";
import VideoPage from "./pages/VideoPage";
import JobPage from "./pages/JobPage";
import JobDetail from "./components/fragments/job/JobDetail";
import EventPage from "./pages/EventPage";
import EventDetail from "./components/fragments/event/EventDetail";
import PageNotFound from "./utils/PageNotFound";
import PeoplePage from "./pages/PeoplePage";
import RewardPage from "./pages/RewardPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileFrag from "./components/fragments/profile/ProfileFrag";
import Activity from "./components/fragments/profile/Activity";
import ProfileContainer from "./components/fragments/profile/ProfileContainer";
import FriendsPost from "./components/fragments/profile/FriendsPost";
import PersonalPost from "./components/fragments/profile/PersonalPost";
import PeopleSearchCard from "./components/fragments/people/PeopleSearchCard";
import Favorites from "./components/fragments/profile/Favourites";
import CreatePostpage from "./pages/CreatePostpage";
import BlogHome from "./blog/pages/home/Home";
import Write from "./blog/pages/write/Write";
import Settings from "./blog/pages/settings/Settings";
import { useSelector } from "react-redux";
import Sidebar from "./blog/sidebar/Sidebar";
import Header from "./blog/header/Header";
import Homepcon from "./blog/homepagecontainer/Homepcon";
// import CrudCompany from "./jobs/CrudCompany"s;
import CrudJob from "./jobs/CrudJob";
import CompanyLayout from "./components/company/Layout";
import CompanyFind from "./components/company/find";
import CompanyMessage from "./components/company/message";
import CompanyEvent from "./components/company/event";
import CompanyStatus from "./components/company/status";
import CompanyProfile from "./components/company/profile";
import CompanyProfileEdit from "./components/company/profileedit";
import EditCompanyPassword from "./components/company/Editcompanypassword";
import AdminLayout from "./components/admin/Layout";
import Dashboard from "./components/admin/dashboard/Dashboard";
import Talents from "./components/admin/talent/Talents";
import Companies from "./components/admin/companies/Companies";
import Report from "./components/admin/report/Report";
import Reward from "./components/admin/reward/Reward";
import RewardEdit from "./components/admin/reward/rewardedit";
import Admins from "./components/admin/admins/Admins";
import Setting from "./components/admin/setting/Setting";
import Profile from "./components/admin/profile/Profile";
import Jobs from "./jobs/CrudJob";
import EditProfilePage from "./pages/EditProfilePage";
import EditPasswordPage from "./pages/EditPasswordPage";
import ChatPage from "./pages/ChatPage";
import AppliedUser from "./components/company/AppliedUser";
import BlogPostDetails from "./pages/BlogPostDetails";
import AppliedJob from "./components/fragments/job/ApliedJob";
import TalentList from "./components/company/TalentList";
import TotalBlogs from "./components/company/status/TotalBlogs";
import TotalJobs from "./components/company/status/Totaljobs";
import TotalEvents from "./components/company/status/TotalEvents";
import SearchPage from "./pages/SearchPage";
const HomeApp = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  const handleShowLoginOpen = () => setShowLogin(true);
  const handleShowLoginClose = () => setShowLogin(false);

  const { data: userData } = useSelector((state) => state.userAuth);
  return (
    <div>
      <Model show={showLogin} onClosed={handleShowLoginClose}>
        <Login click={handleShowLoginClose} />
      </Model>

      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />

        <Route
          path="/home"
          element={
            <Home>
              <NavbarApp modelOpen={handleShowLoginOpen} />
            </Home>
          }
        />

        <Route
          path="/register"
          element={
            <ModelRegistration>
              <NavbarApp modelOpen={handleShowLoginOpen} />
            </ModelRegistration>
          }
        />
        <Route
          path="/main"
          element={
            <Layout>
              <Posts />
            </Layout>
          }
        />
        <Route
          path="/videos"
          element={
            <Layout>
              <VideoPage />
            </Layout>
          }
        />
        <Route
          path="/jobs"
          element={
            <Layout>
              <JobPage />
            </Layout>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <Layout>
              <JobDetail />
            </Layout>
          }
        />
        <Route
          path="/jobs/appliedUser"
          element={
            <Layout>
              <AppliedJob />
            </Layout>
          }
        />
        <Route
          path="/events"
          element={
            <Layout>
              <EventPage />
            </Layout>
          }
        />
        <Route
          path="/eventdetail/:id"
          element={
            <Layout>
              <EventDetail />
            </Layout>
          }
        />
        <Route
          path="/peoples"
          element={
            <Layout>
              <PeoplePage />
            </Layout>
          }
        />
        <Route
          path="/reward"
          element={
            <Layout>
              <RewardPage />
            </Layout>
          }
        />
        <Route
          path="/chat"
          element={
            <Layout>
              <ChatPage />
            </Layout>
          }
        />
        <Route
          path="/usersearch/:username"
          element={
            <Layout>
              <SearchPage />
            </Layout>
          }
        />
        <Route path="/blog" element={<Navigate to={"/blog/homeblog"} />} />
        <Route
          path="/blog"
          element={
            <Layout>
              <BlogHome />
            </Layout>
          }
        >
          <Route path="write" element={<Write />} />
          <Route
            path="homeblog"
            element={
              <>
                <Homepcon />
              </>
            }
          />
          <Route
            path="homeblog/blogpost/:id"
            element={
              <>
                <BlogPostDetails />
              </>
            }
          />
          {/*{userData.token ? }
     
        {/* :  */}
          {/* <Login />}> */}

          {/* <Route path="settings" element={<Settings />}  /> */}
          {/* {userData.token ? :}> */}
        </Route>

        <Route
          path="/profile/:id"
          element={
            <Layout sidebar={false}>
              <ProfilePage></ProfilePage>
            </Layout>
          }
        >
          <Route path="activity" element={<ProfileContainer />}>
            {/* <Route path="favourites" element={<ProfileFrag />} /> */}
            <Route
              path="personal"
              element={
                <>
                  <Activity />
                  <PersonalPost />
                </>
              }
            />
            <Route
              path="friends"
              element={
                <>
                  <Activity />
                  <FriendsPost />
                </>
              }
            />
            <Route
              path="favourites"
              element={
                <>
                  <Activity />
                  <Favorites />
                </>
              }
            />
          </Route>
          <Route path="profile" element={<ProfileFrag />} />
          <Route path="friends" element={<PeoplePage />} />
          <Route path="media" element={<PeoplePage />} />
        </Route>
        <Route
          path="/profile/edit/:id"
          element={
            <Layout sidebar={false}>
              <EditProfilePage />
            </Layout>
          }
        ></Route>
        <Route
          path="/profile/change/password"
          element={<Navigate to={"/profile/edit/password"} />}
        />
        <Route
          path="/profile/edit/password"
          element={
            <Layout sidebar={false}>
              <EditPasswordPage />
            </Layout>
          }
        ></Route>

        <Route path="/:id/createPost" element={<CreatePostpage />} />
        {/* <Route path="/postjobs/crudcompany" element={<CrudCompany />} /> */}
        {/* <Route path="/companylayout" element={<Navigate to={"/companylayout/postjobs"} />} /> */}
        {/* ...
        ...
        ...     */}
        {/* routing for inner admin pages */}
        <Route path="/admin" element={<Navigate to={"/admin/dashboard"} />} />
        <Route path="/admin" element={<AdminLayout />} />

        <Route
          path="/admin/postjobs"
          element={
            <AdminLayout>
              <Jobs />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/talents"
          element={
            <AdminLayout>
              <Talents />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/companies"
          element={
            <AdminLayout>
              <Companies />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/reward"
          element={
            <AdminLayout>
              <Reward />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/reward/edit/:id"
          element={
            <AdminLayout>
              <RewardEdit />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/report"
          element={
            <AdminLayout>
              <Report />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/admins"
          element={
            <AdminLayout>
              <Admins />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/company/register"
          element={
            <AdminLayout>
              <Setting />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <AdminLayout>
              <Profile />
            </AdminLayout>
          }
        />

        {/* amdin page routing ends here */}
        <Route path="/company" element={<CompanyLayout />} />

        <Route
          path="/company/postjob"
          element={
            <CompanyLayout>
              <Jobs />
            </CompanyLayout>
          }
        />

        <Route
          path="/company/blog"
          element={<Navigate to={"/company/blog/homeblog"} />}
        />
        <Route
          path="/company/profile"
          element={
            <CompanyLayout>
              <CompanyProfile />
            </CompanyLayout>
          }
        />

        <Route
          path="/company/profile/edit"
          element={
            <CompanyLayout>
              <CompanyProfileEdit />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/profile/edit/password"
          element={
            <CompanyLayout>
              <EditCompanyPassword />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/status"
          element={
            <CompanyLayout>
              <CompanyStatus />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/status/blogs"
          element={
            <CompanyLayout>
              <TotalBlogs />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/status/jobs"
          element={
            <CompanyLayout>
              <TotalJobs />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/status/events"
          element={
            <CompanyLayout>
              <TotalEvents />
            </CompanyLayout>
          }
        />

        <Route
          path="/company/event"
          element={
            <CompanyLayout>
              <CompanyEvent />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/find"
          element={
            <CompanyLayout>
              <CompanyFind />
            </CompanyLayout>
          }
        />
        <Route
          path="/talent/list"
          element={
            <CompanyLayout>
              <TalentList />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/AppliedUser/:id"
          element={
            <CompanyLayout>
              <AppliedUser />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/jobs/:id"
          element={
            <CompanyLayout>
              <JobDetail />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/message"
          element={
            <CompanyLayout>
              <CompanyMessage />
            </CompanyLayout>
          }
        />
        <Route
          path="/company/blog"
          element={
            <CompanyLayout>
              <BlogHome />
            </CompanyLayout>
          }
        >
          <Route path="write" element={<Write />} />
          <Route
            path="homeblog"
            element={
              <>
                <Homepcon />
              </>
            }
          />
          <Route
            path="homeblog/blogpost/:id"
            element={
              <>
                <BlogPostDetails />
              </>
            }
          />
          {/*{userData.token ? }
     
        {/* :  */}
          {/* <Login />}> */}

          {/* <Route path="settings" element={<Settings />}  /> */}
          {/* {userData.token ? :}> */}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default HomeApp;
