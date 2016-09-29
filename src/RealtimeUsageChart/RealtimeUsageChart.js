import React, {Component} from 'react';
import RealtimeUsage from './RealtimeUsage/RealtimeUsage';
import './RealtimeUsageChart.css';

class RealtimeUsageChart extends Component {
    constructor() {
        super();

        this.state = {
            usage: 0
        };

        this.generateRandomValue = this.generateRandomValue.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.generateRandomValue, 1000);
    }

    generateRandomValue() {
        this.setState({
            usage: parseInt(Math.random() * 100, 10)
        });
    }

    render() {
        return (
            <div className="realtime-chart-container">
                <h3>Realtime Usage</h3>
                <RealtimeUsage usage={this.state.usage}/>
            </div>            
        )
    }
}

export default RealtimeUsageChart;