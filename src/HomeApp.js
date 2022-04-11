import React from 'react'
import Home from './components/home/Home';
import Register from './components/registration/Register';
import MoreInformation from './components/registration/moreInformation/MoreInformation';
import ModelRegistration from './components/registration/modelRegistration/ModelRegistration';
import NavbarApp from './components/navbar/Navbar';
import Model from './utils/Model'
import Login from './components/login/Login'
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/LayoutApp'
import UserRoutes from './routes/UserRoutes';
import Posts from './pages/Posts';
import VideoPage from './pages/VideoPage';
import JobPage from './pages/JobPage';
import JobDetail from './components/fragments/job/JobDetail';
import EventPage from './pages/EventPage';
import PageNotFound from './utils/PageNotFound';
import PeoplePage from './pages/PeoplePage';
const HomeApp = () => {
  const [showLogin, setShowLogin] = React.useState(false);
  const handleShowLoginOpen = () => setShowLogin(true);
  const handleShowLoginClose = () => setShowLogin(false);
  return (
    <div>

      <Model show={showLogin} onClosed={handleShowLoginClose} ><Login /></Model>
        
        <Routes>
          
          <Route path='/' element={<Navigate to={"/home"}  />} />

          <Route path='/home' element={<Home><NavbarApp modelOpen={handleShowLoginOpen}/></Home>} />
          <Route path='/register' element={<Register><NavbarApp modelOpen={handleShowLoginOpen}/></Register>} />
          <Route path='/registeruser' element={<ModelRegistration><NavbarApp modelOpen={handleShowLoginOpen}/></ModelRegistration>} />
          <Route path='/main' element={<Layout><Posts/></Layout>} />
          <Route path='/videos' element={<Layout><VideoPage/></Layout>} />
          <Route path='/jobs' element={<Layout><JobPage/></Layout>} />
          <Route path='/jobs/:id' element={<Layout><JobDetail/></Layout>} />
          <Route path='/events' element={<Layout><EventPage/></Layout>} />
          <Route path='/events/:id' element={<Layout><JobDetail/></Layout>} />
          <Route path='/peoples' element={<Layout><PeoplePage/></Layout>} />

          <Route path='*' element={<PageNotFound/>} />
          
          

        </Routes>
    </div>
  )
}

export default HomeApp