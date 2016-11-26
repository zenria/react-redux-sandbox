import React from 'react';

const DisplayIfCond = ({cond, children})=> (
    cond && children
)

export default DisplayIfCond;
