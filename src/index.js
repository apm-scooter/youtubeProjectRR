import ReactDom from 'react-dom';
import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import _ from 'lodash';

const API_KEY = 'AIzaSyD5JDrcmC29Hci85A0tnTITAZMK0KF-KZU';

/*const Myinput= () =>
{
return <input type="text"/>;
}
*/
//create a new component . This component should produce
//some HTMl
class App extends Component{
constructor(props){
  super(props);

  this.state = {
     videos: [],
     selectedVideo : null
   };

this.videoSearch('surfboards')

}

videoSearch(term){
  YTSearch ({key: API_KEY, term: term},(videos)=>
    {
      //console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    }
  );


}
render(){
  const videoSearch = _.debounce((term) => { this.videoSearch(term)},800);
return (
    <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      onVideoSelect={selectedVideo => this.setState({selectedVideo})}
      videos={this.state.videos} />
    </div>
  );
}
}
//Take this componen´s generated HTML and put
//on the page  (in the DOM)
 ReactDom.render(<App/>,document.querySelector('.container'));
