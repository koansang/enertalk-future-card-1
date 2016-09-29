import React, {Component} from 'react';
import './RealtimeUsage.css';

class RealtimeUsage extends Component {
    render() {
        return (
            <div className="realtime-label">
                <span className="value">{this.props.usage}W</span>
            </div>
        );
    }
}

RealtimeUsage.propTypes = {
    usage: React.PropTypes.number.isRequired
}

RealtimeUsage.defaultProps = {
    usage: 0
}

export default RealtimeUsage;