import React from 'react';

const Progress = ({length, currentIndex}) => {
  console.clear();
  console.log(length)
  return (
    <ul className="multi-steps">
      { [...Array(length)].map((i, index) => {
        return <li key={index} className={ index === currentIndex ? 'is-active': ''}>{i}</li>;
      })}
    </ul>
  );
};

export default Progress;
