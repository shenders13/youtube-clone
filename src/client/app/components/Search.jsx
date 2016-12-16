import React from 'react'

const Search = ({searchHandler}) => (
  <div className="search-bar form-inline">
    <input onChange={(event) => (searchHandler(event.target.value))} className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

Search.propTypes = {
  searchHandler: React.PropTypes.func.isRequired
};

export default Search;