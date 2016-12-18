const initialState = {
  text: 'text from redux store',
  searchMode: true
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE_ACTION_TYPE':
      return {
        text: action.text.text,
      };
    case 'UPDATE_VIDEO_LIST':
      return {
        videos: action.videos,
        favourites: state.favourites,
        searchMode: state.searchMode,
      };
    case 'UPDATE_FAVOURITES_LIST':
      return {
        favourites: action.videos,
        videos: state.videos,
        searchMode: state.searchMode,
      };
    case 'TOGGLE_SEARCH_MODE_ON':
      return {
        favourites: state.favourites,
        videos: state.videos,
        searchMode: true,
      };
    case 'TOGGLE_SEARCH_MODE_OFF':
      return {
        favourites: state.favourites,
        videos: state.videos,
        searchMode: false,
      };
    default: return state;
  }
};

export default exampleReducer;