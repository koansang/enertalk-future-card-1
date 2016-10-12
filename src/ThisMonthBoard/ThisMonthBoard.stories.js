/* eslint import/extensions: "off" */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text, number, select } from '@kadira/storybook-addon-knobs';
import ThisMonthBoard from './ThisMonthBoard.jsx';


storiesOf('ThisMonthBoard', module)
  .add('default', () => {
    const countries = {
      KR: 'Korea',
      US: 'United States',
      JP: 'Japan',
    };
    const languages = {
      ko: 'Korean',
      en: 'English',
      ja: 'Japanese',
    };
    const props = {
      metering: {
        headerText: text('meteringHeader', '현재'),
        usage: number('meteringUsage', 234100000),
        bill: number('meteringBill', 30290),
      },
      forecast: {
        headerText: text('forecastHeader', '예상'),
        usage: number('forecastUsage', 351100000),
        bill: number('forecastBill', 63220),
      },
      country: select('country', countries, 'KR'),
      language: select('language', languages, 'ko'),
      precision: number('precision', 1),
    };
    return (
      <ThisMonthBoard {...props} />
    );
  });
