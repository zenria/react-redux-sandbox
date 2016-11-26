import React from 'react';
import classNames from 'classnames';

const DataDisplayer = ({data, loading})=> {
    if(!data){
        return null;
    }
    var classes = classNames({
        "data": true,
        "loading": loading
    })
    return <div className={classes}>{data}</div>
}
export default DataDisplayer;
