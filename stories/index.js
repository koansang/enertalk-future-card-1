/* eslint import/extensions: "off" */
import React from 'react';
import { storiesOf, addDecorator } from '@kadira/storybook';
import UsageBoard from '../src/UsageBoard/UsageBoard.jsx';
import ThisMonthBoard from '../src/ThisMonthBoard/ThisMonthBoard.jsx';
import RealtimeUsageChart from '../src/RealtimeUsageChart';

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

storiesOf('UsageBoard', module)
  .add('metering', () => {
    const props = {
      headerText: '현재',
      usage: 234100000,
      bill: 30290,
      country: 'KR',
      language: 'ko',
      precision: 1,
    };
    return (
      <UsageBoard {...props} />
    );
  })
  .add('forecast', () => {
    const props = {
      headerText: '예상',
      usage: 351100000,
      bill: 63220,
      country: 'KR',
      language: 'ko',
      precision: 1,
    };
    return (
      <UsageBoard {...props} />
    );
  });

storiesOf('ThisMonthBoard', module)
  .add('metering', () => {
    const props = {
      metering: {
        headerText: '현재',
        usage: 234100000,
        bill: 30290,
      },
      forecast: {
        headerText: '예상',
        usage: 351100000,
        bill: 63220,
      },
      country: 'KR',
      language: 'ko',
      precision: 1,
    };
    return (
      <ThisMonthBoard {...props} />
    );
  });

storiesOf('RealtimeUsageChart', module)
  .add('default', () => (
    <RealtimeUsageChart />
  ));
