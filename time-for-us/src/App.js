import React, { Component } from 'react';
import './App.css';

import { BackgroundImage } from './components/BackgroundImage';
import { TimeZoneText } from './components/TimeZoneText';

import moment from 'moment-timezone';
import Autosuggest from 'react-bootstrap-autosuggest';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      "timezoneA": "Australia/Sydney",
      "timezoneB": "America/New_York",
    };
  }

  extractCity(timezone) {
    return timezone.split("/")[1].replace("_", " ").toLowerCase();
  };

  render() {
    //console.log(moment.tz.names());
    const timezoneList = moment.tz.names();

    const timezoneA = this.state.timezoneA;
    const timezoneB = this.state.timezoneB;
    const cityA = this.extractCity(this.state.timezoneA);
    const cityB = this.extractCity(this.state.timezoneB);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className=".App-title">Time For Us</h1>
        </header>
        <p className="App-intro">
          This app allows one person to see what the current time is for a person in another location.
        </p>

        <Grid>
          <Row className="show-grid">
            <Col md={6}>
              <FormGroup controlId="browserInput">
                <Autosuggest
                    datalist={timezoneList}
                    placeholder={timezoneA}/>
              </FormGroup>
              <BackgroundImage keyword={cityA}/>
              <TimeZoneText timezone={timezoneA} />
            </Col>
            <Col md={6}>
              <FormGroup controlId="browserInput">
                <Autosuggest
                    datalist={timezoneList}
                    placeholder={timezoneB}/>
              </FormGroup>
              <BackgroundImage keyword={cityB}/>
              <TimeZoneText timezone={timezoneB} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
