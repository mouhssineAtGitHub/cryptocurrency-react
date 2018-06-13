import React from 'react';

const SearchBar = props =>{ 
    return ( < input type="text" id="search-input" placeholder="Filter your search..."  
               onInput={props.changeHandler} />
)
};
export default SearchBar;