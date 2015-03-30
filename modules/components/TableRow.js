'use strict';

import React from 'react';

import OperationButton from './OperationButton';

class TableRow extends React.Component {
  getDefaultProps() {
    return {
      operations: []
    };
  }

  render() {
    let operations = [];
    let component = this.props.component;
    let componentName = this.props.componentName;
    let componentParameters = '';
    let classString = component + ' title';

    if (this.props.component.parameters) {
      for (let parameter in this.props.component.parameters) {
        if (this.props.component.parameters.hasOwnProperty(parameter)) {
          componentParameters += parameter + ': ' + this.props.component.parameters[parameter] + ' ';
        }
      }
    }

    this.props.operations.forEach(function (operation, index) {
      let hrefString = '#' + operation;

      operations.push(<OperationButton key={index} componentName={componentName} name={operation} href={hrefString} />);
    });

    return (
      <tr>
        <td>
          <p className={classString}>
            {this.props.component.title}
          </p>
          <p className="condition parameter">
            {componentParameters}
          </p>
        </td>
        <td>
          {operations}
        </td>
      </tr>
    );
  }
}

export default TableRow;
