import logo from './logo.svg';
import './App.css';
import HomeApp from './HomeApp';
import Layout from './components/layout/LayoutApp'
import JobPage from './pages/JobPage';
import VideoPage from './pages/VideoPage';
import JobDetail from './components/fragments/job/JobDetail';
import Posts from './pages/Posts';

function App() {
  return (
    <div className="App">
      {/* <HomeApp/> */}
      <Layout>
        {/* <Posts/> */}
        {/* <JobPage/> */}
        <JobDetail/>
        {/* <VideoPage/> */}
      </Layout>
      {/* zklnc */}
    </div>
  );
}

export default App;
