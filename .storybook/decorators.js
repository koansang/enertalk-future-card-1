import React from 'react';
import { addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

const centerStyle = {
  maxWidth: '768px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '100px',
};
const CenterDecorator = story => (
  <div style={centerStyle}>
    {story()}
  </div>
);

addDecorator(CenterDecorator);
addDecorator(withKnobs);
