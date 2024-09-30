import React from 'react';

// Define the Car component
function Car(props) {
  return (
    <>
      <h1>Props are arguments passed into React components.<br />
        Props are passed to components via HTML attributes.
      </h1>
      <h2>I am a {props.Name}</h2>
      <h2>My vu id is {props.id}</h2>
    </>
  );
}

export default Car;
