import logo from './logo.svg';
import './App.css';
import HomeApp from './HomeApp';
import Layout from './components/layout/LayoutApp'
import JobPage from './pages/JobPage';
import VideoPage from './pages/VideoPage';
import JobDetail from './components/fragments/job/JobDetail';

function App() {
  return (
    <div className="App">
      {/* <HomeApp/> */}
      <Layout>
        {/* <JobPage/> */}
        <JobDetail/>
        {/* <VideoPage/> */}
      </Layout>
      {/* zklnc */}
    </div>
  );
}

export default App;
