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
}


