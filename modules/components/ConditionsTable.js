'use strict';

import React from 'react';

import TableRow from './TableRow';

class ConditionsTable extends React.Component {
    getDefaultProps() {
        return {
            currentConditions: []
        };
    }

    render() {
        let rows = [];
        let componentName = 'condition';
        let operations = ['edit', 'delete'];

        this.props.currentConditions.forEach(function (condition, index) {
            rows.push(<TableRow key={index} componentName={componentName} component={condition} operations={operations} />);
        });

        return (
            <table id="conditions" className="table table-bordered">
                <thead>
                    <tr>
                        <td>Elements</td>
                        <td>Operation</td>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <tr className="info">
                        <td colSpan="42">
                            <a className="condition add operation" href="#condition-add">add condition</a>
                            <a className="condition or add operation" href="#condition-or-add">add or</a>
                            <a className="condition and add operation" href="#condition-and-add">add and</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

export default ConditionsTable;
