import React from 'react'
import { connect } from 'react-redux';
import Search from '../components/Search.jsx'
import ExampleComponent from '../components/ExampleComponent.jsx'
import Actions from '../actions/index'
import VideoPlayer from '../components/VideoPlayer.jsx'
import VideoList from '../components/VideoList.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.searchHandler('David Attenborough Planet Earth')
  }

  searchHandler(searchInput) {
    const context = this;
    this.YouTubeRequest(
      { key: "AIzaSyDBu3YryPY3Ek1_CSt8YgF4dDNR7RO1JCk", query: searchInput, max: 10 }, 
      (videos) => { 
        let promiseArray = [];
        videos.forEach(function(video) {
          const url ='https://www.googleapis.com/youtube/v3/videos?id='+ video.id.videoId  + '&key=AIzaSyDBu3YryPY3Ek1_CSt8YgF4dDNR7RO1JCk&part=snippet,contentDetails,statistics,status';
          const promise = new Promise(function(resolve, reject) {
            $.ajax({
              url: url,
              type: 'GET',
              success: function(data) {
                resolve(data.items)
              },
              error: function(error) {
                reject(error)
              }
            });
          })
          promiseArray.push(promise);
        })
        Promise.all(promiseArray).then(function(newVideoData) {
          for (var i = 0; i < videos.length; i++) {
            videos[i] = newVideoData[i][0]
          }
          context.props.updateVideoList(videos) 
        })
        .catch(function(err) {
          console.log('Catch: ', err);
        });
      }
    )
  }

  clickHandler(event) {
    this.searchHandler(event.snippet.title)
  }

  favouritesHandler(video) {
    if (this.props.favourites) {
      var videos = this.props.favourites;
      videos.push(video);
    } else {
      var videos = [video]
    }
    this.props.updatefavourites(videos)
  }

  toggleSearchModeHelper(toggleType) {
      this.props.toggleSearchMode(toggleType)      
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
    if (this.props.videos) {
      const searchModeClass = this.props.searchMode ? "toggle-button-selected" : "toggle-button"
      const favouriteModeClass = this.props.searchMode ? "toggle-button" : "toggle-button-selected"
      console.log('searchModeClass: ', searchModeClass)
      console.log('favouriteModeClass: ', favouriteModeClass)

      return (
        <div>
          <div className="col-md-7">
            <Search searchHandler={this.searchHandler.bind(this)}/>
          </div>
          <div className="col-md-5">
            <button className={searchModeClass} onClick={() => (this.toggleSearchModeHelper('search'))}>
              <span className="glyphicon glyphicon-search"></span> Search Mode
            </button>
            <button className={favouriteModeClass} onClick={() => (this.toggleSearchModeHelper('favourites'))}>
              <span className="glyphicon glyphicon-star"></span> Favourites Mode
            </button>
          </div>
           <div className="col-md-7">
             <VideoPlayer video={this.props.videos[0]} favouritesHandler={this.favouritesHandler.bind(this)}/>
           </div>
           <div className="col-md-5">
             <VideoList videos={this.props.searchMode ? this.props.videos : this.props.favourites} clickHandler={this.clickHandler.bind(this)}/>
           </div>
        </div>
      );
    }
    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const props = {
    text: state.exampleReducer.text,
    videos: state.exampleReducer.videos,
    favourites: state.exampleReducer.favourites,
    searchMode: state.exampleReducer.searchMode
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
    },
    updatefavourites: (videos) => {
      dispatch(Actions.updateFavouritesAction(videos))
    },
    toggleSearchMode: (toggleType) => {
      console.log('toggleSearchMode toggleType: ', toggleType)
      dispatch(Actions.toggleSearchModeAction(toggleType))
    }
  }
}

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppConnected;