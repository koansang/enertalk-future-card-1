import React from 'react';
import { storiesOf } from '@kadira/storybook';
import UsageBoard from '../src/UsageBoard/UsageBoard.jsx';
import RealtimeUsageChart from '../src/RealtimeUsageChart';

storiesOf('UsageBoard', module)
  .add('default', () => {
    const props = {
      metering: {
        usage: 150000000,
        bill: 15000,
      },
      forecast: {
        usage: 250000000,
        bill: 25000,
      },
      country: 'KR',
      language: 'ko',
    };
    return (
      <UsageBoard {...props} />
    );
  });

storiesOf('RealtimeUsageChart', module)
  .add('default', () => (
    <RealtimeUsageChart />
  ));
