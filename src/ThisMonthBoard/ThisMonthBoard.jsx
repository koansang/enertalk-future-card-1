import React, { PropTypes } from 'react';
import './ThisMonthBoard.css';
import UsageBoard from '../UsageBoard';

function ThisMonthBoard(props) {
  const { metering, forecast, ...options } = props;
  return (
    <article className="this-month-board">
      <UsageBoard {...metering} {...options} />
      <UsageBoard {...forecast} {...options} />
    </article>
  );
}

const usageBoardType = PropTypes.shape({
  headerText: PropTypes.string,
  bill: PropTypes.number,
  usage: PropTypes.number,
});

ThisMonthBoard.propTypes = {
  metering: usageBoardType,
  forecast: usageBoardType,
};

export default ThisMonthBoard;
