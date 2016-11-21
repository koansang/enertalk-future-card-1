import React, { PropTypes } from 'react';

function UsageColumnChart({ title }) {
  return (
    <article>{title}</article>
  );
}

UsageColumnChart.defaultProps = {
  title: 'UsageColumnChart',
};

UsageColumnChart.propTypes = {
  title: PropTypes.string,
};

export default UsageColumnChart;
