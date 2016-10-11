/* eslint import/extensions: "off" */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UsageBoard from '../src/UsageBoard/UsageBoard.jsx';
import RealtimeUsageChart from '../src/RealtimeUsageChart';

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

storiesOf('RealtimeUsageChart', module)
  .add('default', () => (
    <RealtimeUsageChart />
  ));
