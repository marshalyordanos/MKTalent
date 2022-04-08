import logo from './logo.svg';
import './App.css';
import HomeApp from './HomeApp';
import Layout from './components/layout/LayoutApp'
import JobPage from './pages/JobPage';
import VideoPage from './pages/VideoPage';
import JobDetail from './components/fragments/job/JobDetail';
import PostCard from './components/fragments/PostCard'
import EventDetail from './components/fragments/event/EventDetail';
import EventCard from './components/fragments/event/EventCard';
function App() {
  return (
    <div className="App">
      {/* <HomeApp/> */}
      <Layout>
        {/* <JobPage/> */}
        {/* <JobDetail/> */}
        {/* <VideoPage/> */}
        <EventDetail/>
        {/* <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/> */}
        {/* <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/> */}
      </Layout>
      {/* zklnc */}
    </div>
  );
}

export default App;
