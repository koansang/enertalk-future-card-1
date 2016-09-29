import React, { PropTypes } from 'react';
import './DailyColumnChart.css';
import ElectricityUnit from '../ElectricityUnit';

const electricityPropShape = PropTypes.shape({
  usage: PropTypes.number,
  bill: PropTypes.number,
  start: PropTypes.number,
  end: PropTypes.number,
});

function DailyColumnChart({ metering, forecast }) {
  const { usage: meteringUsage, bill: meteringBill } = metering;
  const { usage: forecastUsage, bill: forecastBill } = forecast;

  return (
    <article>
      <section className="this-month">
        <div className="metering">
          <p>이번 달 현재</p>
          <div className="metering-bill">{meteringBill}원</div>
          <div className="metering-usage">
            {<ElectricityUnit amount={meteringUsage} />}
          </div>
        </div>
        <div className="forecast">
          <p>이번 달 예상</p>
          <div className="forecast-bill">{forecastBill}원</div>
          <div className="forecast-usage">
            {<ElectricityUnit amount={forecastUsage} />}
          </div>
        </div>
      </section>
    </article>
  );
}

DailyColumnChart.propTypes = {
  metering: electricityPropShape.isRequired,
  forecast: electricityPropShape.isRequired,
};

DailyColumnChart.defaultProps = {
  metering: {
    usage: 0,
    bill: 0,
  },
  forecast: {
    usage: 0,
    bill: 0,
  },
};

export default DailyColumnChart;
