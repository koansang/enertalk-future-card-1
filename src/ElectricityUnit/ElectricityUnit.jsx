import React, { PropTypes } from 'react';

const MILLI_WATT = 1;
const WATT = 1000 * MILLI_WATT;
const KILO_WATT = 1000 * WATT;
const MEGA_WATT = 1000 * KILO_WATT;
const UNIT = {
  mWh: 'mWh',
  Wh: 'Wh',
  kWh: 'kWh',
  MWh: 'MWh',
};

Object.freeze(UNIT);

function filterFloatingPoint(amount, precision) {
  return amount.toFixed(precision);
}

function ElectricityUnit({ amount = 0, precision = 0, isInstant = false }) {

  let displayAmount;
  let displayUnit;

  if (amount <= 0) {
    displayAmount = 0;
    displayUnit = UNIT.Wh;
  } else if (amount < WATT) {
    displayAmount = amount;
    displayUnit = UNIT.mWh;
  } else if (amount < KILO_WATT) {
    displayAmount = filterFloatingPoint(amount / WATT, precision);
    displayUnit = UNIT.Wh;
  } else if (amount < MEGA_WATT) {
    displayAmount = filterFloatingPoint(amount / KILO_WATT, precision);
    displayUnit = UNIT.kWh;
  } else {
    displayAmount = filterFloatingPoint(amount / MEGA_WATT, precision);
    displayUnit = UNIT.MWh;
  }

  if (isInstant) {
    displayUnit = displayUnit.slice(0, -1);
  }

  return (
    <span>
      <span className="amount">{displayAmount}</span>
      <span className="unit">{displayUnit}</span>
    </span>
  );
}

ElectricityUnit.propTypes = {
  amount: PropTypes.number,
  precision: PropTypes.number,
  isInstant: PropTypes.bool,
};

ElectricityUnit.defaultProps = {
  amount: 0,
  precision: 0,
  isInstant: false,
};

export default ElectricityUnit;
export { filterFloatingPoint };
