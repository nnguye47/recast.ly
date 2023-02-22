import videoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

//import defaultExport from _____
console.log(videoData);
var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search />
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        {/* <div><h5><em>videoPlayer</em> view goes here</h5></div> */}
        <VideoPlayer />
      </div>
      <div className="col-md-5">
        {/* <div><h5><em>videoList</em> view goes here</h5></div> */}
        <VideoList />
      </div>
    </div>
  </div>

);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
