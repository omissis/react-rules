'use strict';

import React from 'react';

import EventsTable from './EventsTable';
import ConditionsTable from './ConditionsTable';
import ActionsTable from './ActionsTable';

class RuleConfiguration extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            currentEvents: [],
            currentConditions: [],
            currentActions: []
        };
    }

    componentWillMount() {
        this.loadCommentsFromServer();
    }

    loadCommentsFromServer() {
        let request = new XMLHttpRequest();

        request.open('GET', this.props.url, true);

        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            this.setState(JSON.parse(request.responseText));
          } else {
            console.error(this.props.url, request.status, request.responseText);
          }
        }.bind(this);

        request.onerror = function () {
          console.error(this.props.url, request.status, request.responseText);
        }.bind(this);

        request.send();
    }

    render() {
        return (
            <div>
                <EventsTable currentEvents={this.state.currentEvents} />
                <ConditionsTable currentConditions={this.state.currentConditions} />
                <ActionsTable currentActions={this.state.currentActions} />
            </div>
        );
    }
}

export default RuleConfiguration;
