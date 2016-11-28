import React from 'react'

const Loading = ({loading}) => {
    if(loading){
        return <div className="external loading">LOADING</div>
    } else {
        return <div className="external not-loading">not loading</div>
    }
}

export default Loading;
