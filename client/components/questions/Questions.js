import React from 'react';

class Questions extends React.Component {
  componentDidMount() {
    fetch('/api/')
      .then((response) => response.json())
      .then(responseJson => {
        console.log(responseJson);
      }).catch(error => {
        throw(error);
      });
  }
  render() {
    return (
      <section className="container">
        <h1>Hello mate</h1>
      </section>
    );
  }
}

export default Questions;
