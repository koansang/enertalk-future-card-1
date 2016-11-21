import React, { PropTypes } from 'react';

const UNIT = {
  KR: {
    ko: { label: '원', pre: false },
    en: { label: '₩ ', pre: true },
    ja: { label: '₩ ', pre: true },
  },
  US: {
    ko: { label: '$ ', pre: true },
    en: { label: '$ ', pre: true },
    ja: { label: '$ ', pre: true },
  },
  JP: {
    ko: { label: '¥ ', pre: true },
    en: { label: '¥ ', pre: true },
    ja: { label: '円', pre: false },
  },
};

Object.freeze(UNIT);

function filterFloatingPoint(amount = 0, precision = 0) {
  return parseFloat(amount.toFixed(precision));
}

function ElectricityBill(props) {
  const { amount, precision, country, language } = props;
  const displayAmount = filterFloatingPoint(amount, precision).toLocaleString();
  const displayUnit = UNIT[country][language];

  return (
    <span>
      {displayUnit.pre ? <span className="unit">{displayUnit.label}</span> : null}
      <span className="amount">{displayAmount}</span>
      {displayUnit.pre ? null : <span className="unit">{displayUnit.label}</span>}
    </span>
  );
}

ElectricityBill.defaultProps = {
  amount: 0,
  precision: 0,
  country: 'US',
  language: 'en',
};

ElectricityBill.propTypes = {
  amount: PropTypes.number,
  precision: PropTypes.number,
  country: PropTypes.oneOf(['US', 'KR', 'JP']),
  language: PropTypes.oneOf(['en', 'ko', 'ja']),
};

export default ElectricityBill;
export {
  filterFloatingPoint,
};
