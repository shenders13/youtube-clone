import React from 'react';
import { Debounce } from 'react-throttle';

const Search = ({searchHandler}) => (
  <div className="search-bar form-inline">
    <div>
      <Debounce time="300" handler="onChange">
        <input placeholder="Search for videos here..." onChange={(event) => (searchHandler(event.target.value))} className="form-control" type="text" />
      </Debounce>
    </div>
  </div> 
);

Search.propTypes = {
  searchHandler: React.PropTypes.func.isRequired
};

export default Search;