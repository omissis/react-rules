import React from 'react';

import TableRow from './TableRow';

class EventsTable extends React.Component {
    render() {
        let events = this.props.events;
        let rows = [];
        let componentName = "event";
        let operations = ["edit", "delete"];

        this.props.currentEvents.forEach(function (event, index) {
            rows.push(<TableRow key={index} componentName={componentName} component={event} operations={operations} />);
        });

        return (
            <table id="events" className="table table-bordered">
                <thead>
                    <tr>
                        <td>Event</td>
                        <td>Operation</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <tr className="info">
                        <td colSpan="42">
                            <a className="event add operation" href="#event-add">add event</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
};

EventsTable.defaultProps = { currentEvents: [] };

export default EventsTable;
