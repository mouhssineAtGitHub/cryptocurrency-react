import React from 'react';

const Buttons = props =>{ 
    return (    <span>
                    <button onClick={props.sortByRank}>Rank <i className={props.sortRank}></i></button>
                    <button onClick={props.sortByName}>Name <i className={props.sortName}></i></button>
                    <button onClick={props.sortByPrice}>Price <i className={props.sortPrice}></i></button>
                </span>
            )
};
export default Buttons;