import React, { PropTypes } from 'react';
import './UsageBoard.css';
import ElectricityUnit from '../ElectricityUnit';
import ElectricityBill from '../ElectricityBill';

function UsageBoard(props) {
  const { headerText, footerText, usage, bill, l11n } = props;

  return (
    <article className="usage-board">
      <header>{headerText}</header>
      <section>
        <div className="bill">
          {<ElectricityBill amount={bill} {...l11n} />}
        </div>
        <div className="usage">
          {<ElectricityUnit amount={usage} />}
        </div>
      </section>
      {footerText ? <footer>{footerText}</footer> : null}
    </article>
  );
}

const l11nPropShape = PropTypes.shape({
  country: PropTypes.oneOf(['US', 'KR', 'JP']),
  language: PropTypes.oneOf(['en', 'ko', 'ja']),
});

UsageBoard.defaultProps = {
  headerText: 'My UsageBoard',
  usage: 0,
  bill: 0,
};

UsageBoard.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string,
  usage: PropTypes.number.isRequired,
  bill: PropTypes.number.isRequired,
  l11n: l11nPropShape,
};

export default UsageBoard;
