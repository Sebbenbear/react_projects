import React, { Component } from 'react';
import moment from 'moment-timezone';
import Autosuggest from 'react-bootstrap-autosuggest';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

import { BackgroundImage } from './BackgroundImage';
import { TimeZoneText } from './TimeZoneText';

export class TimeZoneInfoPanel extends Component {

    constructor(props) {
        super(props);

        const myCity = this.extractCity(this.props.timeZone)
    
        this.state = {
            isLoading: false,
            error: null,
            city: myCity,
            timeZoneList: moment.tz.names(),
            timeZone: this.props.timeZone
        };
        this.handleChange = this.handleChange.bind(this);
    }

    extractCity(timezone) {
        return timezone.split("/")[1].replace("_", " ").toLowerCase();
    };

    handleChange(event) {
        if (this.state.timeZoneList.includes(event)) {
            this.setState({
                timeZone: event,
                city: this.extractCity(event)
            });
        }
    }

    render() {
        return (
            <div>
                <FormGroup controlId="timezone">
                    <ControlLabel>{this.props.title}</ControlLabel>
                    <Autosuggest
                        datalist={this.state.timeZoneList}
                        placeholder={this.state.timeZone}
                        onChange={this.handleChange}
                        />
                </FormGroup>
                <BackgroundImage keyword={this.state.city}/>
                <TimeZoneText timeZone={this.state.timeZone} />
            </div>
        );
    }
}

export default TimeZoneInfoPanel;