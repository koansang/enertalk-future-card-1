import React, { PropTypes } from 'react';
import './UsageBoard.css';
import ElectricityUnit from '../ElectricityUnit';
import ElectricityBill from '../ElectricityBill';

function UsageBoard(props) {
  const { headerText, usage, bill, ...options } = props;

  return (
    <article className="usage-board">
      <header>{headerText}</header>
      <section>
        {<ElectricityBill amount={bill} {...options} />}
      </section>
      <footer>
        {<ElectricityUnit amount={usage} {...options} />}
      </footer>
    </article>
  );
}

UsageBoard.defaultProps = {
  headerText: 'My UsageBoard',
  usage: 0,
  bill: 0,
};

UsageBoard.propTypes = {
  headerText: PropTypes.string.isRequired,
  usage: PropTypes.number.isRequired,
  bill: PropTypes.number.isRequired,
};

export default UsageBoard;
