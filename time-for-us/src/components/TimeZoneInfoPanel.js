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

        const myKeyword = this.extractKeyword(this.props.timeZone)
    
        this.state = {
            isLoading: false,
            error: null,
            keyword: myKeyword,
            timeZoneList: moment.tz.names(),
            timeZone: this.props.timeZone
        };
        this.handleChange = this.handleChange.bind(this);
    }

    extractKeyword(timezone) {
        const splitTZ = timezone.split("/");
        let keyword;

        if (splitTZ.length > 1) {
            keyword = splitTZ[1];
        } else {
            keyword = splitTZ[0]
        }

        return keyword.replace("_", " ").toLowerCase();
    };

    handleChange(event) {
        if (this.state.timeZoneList.includes(event)) {
            this.setState({
                timeZone: event,
                keyword: this.extractKeyword(event)
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
                <BackgroundImage keyword={this.state.keyword}/>
                <TimeZoneText timeZone={this.state.timeZone} />
            </div>
        );
    }
}

export default TimeZoneInfoPanel;