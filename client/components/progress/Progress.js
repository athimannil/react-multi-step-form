import React from 'react';

const Progress = ({length}) => {
  console.clear();
  console.log(length)
  return (
    <ul className="multi-steps">
      { [...Array(length)].map((i, index) => {
        return <li key={index}>{i}</li>;
      })}
    </ul>
  );
};

export default Progress;
