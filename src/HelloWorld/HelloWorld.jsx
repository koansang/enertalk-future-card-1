import React, { PropTypes } from 'react';

function HelloWorld(props) {
  const { name } = props;
  return (
    <div>
      <h1>Hello, {name || 'world'}!</h1>
    </div>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string,
};

export default HelloWorld;
