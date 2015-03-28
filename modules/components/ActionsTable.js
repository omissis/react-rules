import React from 'react';

import TableRow from './TableRow';

class ActionsTable extends React.Component {
    getDefaultProps() {
        return {
            currentActions: []
        };
    }

    render() {
        let rows = [];
        let componentName = "action";
        let operations = ["edit", "delete"];

        this.props.currentActions.forEach(function (action, index) {
            rows.push(<TableRow key={index} componentName={componentName} component={action} operations={operations} />);
        });

        return (
            <table id="actions" className="table table-bordered">
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
                            <a className="action add operation" href="#action-add">add action</a>
                            <a className="action loop add operation"  href="#action-loop-add">add loop</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

export default ActionsTable;
