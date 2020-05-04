import React, { useState } from 'react';

const Result = (props) => {
  console.log(props.location.state); // here will be your data

  return (
    <div className="result-container">
      <h1>Result Site</h1>
      <p>{props.location.state.referrer.brand}</p>
    </div>
  );
};

export default Result;
