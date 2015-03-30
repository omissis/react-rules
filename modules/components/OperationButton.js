'use strict';

import React from 'react';

class OperationButton extends React.Component {
  render() {
    let classString = this.props.componentName + ' ' + this.props.name + ' operation';

    return (
      <a className={classString} href={this.props.href}>
        {this.props.name}
      </a>
    );
  }
}

export default OperationButton;
