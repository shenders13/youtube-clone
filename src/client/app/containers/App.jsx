import React from 'react'
import { connect } from 'react-redux';
import Search from '../components/Search.jsx'
import ExampleComponent from '../components/ExampleComponent.jsx'
import Actions from '../actions/index'
import VideoPlayer from '../components/VideoPlayer.jsx'
import VideoList from '../components/VideoList.jsx'

class App extends React.Component {

  searchHandler(searchInput, dispatch) {
    this.YouTubeRequest(
      { key: "AIzaSyDBu3YryPY3Ek1_CSt8YgF4dDNR7RO1JCk", 
        query: searchInput, 
        max: 5 },
      (videoList) => { dispatch(Actions.updateVideoListAction(videoList)) }
    )
  }

  YouTubeRequest(options, callback) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        key: options.key,
        q: options.query,
        maxResults: options.max,
        part: 'snippet',
        videoEmbeddable: true,
        type: 'video'
      },
      success: function(data) {
        callback(data.items);
      },
      error: function(error) {
        console.error('ajax request didnt work: ', error);
      }
    });
  }

  render () {
    console.log('this.props: ', this.props)
    return (
      <div>
        <Search searchHandler={this.searchHandler}/>
      </div>
    );
  }
}

// <div className="col-md-7">
//   <VideoPlayer video={this.props.videos[0]}/>
// </div>
// <div className="col-md-5">
//   <VideoList videos={this.props.videos} />
// </div>



const mapStateToProps = (state) => {
  const props = {
    text: state.exampleReducer.text,
    videos: state.exampleReducer.videos
  };
  return props;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateText: () => {
      dispatch(Actions.exampleAction({text: "STORE UPDATED!"}))
    },
    updateVideoList: (videos) => {
      dispatch(Actions.updateVideoListAction(videos))
    }
  }
}

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppConnected;