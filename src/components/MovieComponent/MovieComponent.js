import React from 'react';

const MovieComponent = ({movie}) => {




    const {title ,poster_path, popularity} = movie;
    return (
        <div>
            <img src={poster_path} alt={title}/>
            <h3>{title}</h3>
            <h4>{popularity}</h4>
        </div>
    );
};

export {MovieComponent};