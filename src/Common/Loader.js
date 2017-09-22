import React from 'react';

const Loader = (props) => {
    if (props.isLoading){
        return <p>Loading...</p>;
    } else {
        return props.children;
    }
};

export default Loader;