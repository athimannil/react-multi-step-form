import React from 'react';

const Progress = ({length}) => {
  console.clear();
  console.log(length)
  return (
    <ul>
      { [...Array(length)].map((i, index) => {
        return <li key={index}>{index}</li>;
      })}
    </ul>
  );
};

export default Progress;
