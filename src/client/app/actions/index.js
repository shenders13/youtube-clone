export default class Actions {
  static exampleAction(text) {
    return {
      type: 'EXAMPLE_ACTION_TYPE',
      text,
    };
  }
  static updateVideoListAction(videos) {
    return {
      type: 'UPDATE_VIDEO_LIST',
      videos: videos,
    };
  }
  static updateFavouritesAction(videos) {
    return {
      type: 'UPDATE_FAVOURITES_LIST',
      videos: videos,
    };
  }
  static toggleSearchModeAction(toggleType) {
    if (toggleType === 'search') {
      console.log('action toggleType: ', toggleType)
      console.log('inside if statement that thinks it a search ON')
      return {
        type: 'TOGGLE_SEARCH_MODE_ON',
      };
    }
    return {
      type: 'TOGGLE_SEARCH_MODE_OFF',
    };
  }
}


