/* eslint import/extensions: "off" */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';
import UsageColumnChart from './UsageColumnChart.jsx';

storiesOf('UsageColumnChart', module)
  .add('default', () => {
    const props = {
      title: text('title', 'UsageColumnChart'),
    };
    return (
      <UsageColumnChart {...props} />
    );
  });
