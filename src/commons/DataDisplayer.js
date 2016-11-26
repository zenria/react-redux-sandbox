import React from 'react';
import classNames from 'classnames';

const DataDisplayer = ({data, loading})=> {
    var classes = classNames({
        "data": true,
        "loading": loading,
        "data-notloaded": !data
    })
    return <div className={classes}>{data?data:"data not loaded"}</div>
}
export default DataDisplayer;
