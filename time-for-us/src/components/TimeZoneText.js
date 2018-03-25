import React, { Component } from 'react';
import moment from 'moment-timezone';

export class TimeZoneText extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            isLoading: false,
            error: null,
        };
    }

    render() {
        var timezone = this.props.timezone;
        var momentTimezone = moment.tz(moment().format(), timezone);

        return (
            <div>
                <p>{timezone}</p>
                <p>{momentTimezone.format('h:mm:ss a')}</p>
                <p>{momentTimezone.format('MMMM Do YYYY')}</p>
            </div>
        );
    }
}

export default TimeZoneText;