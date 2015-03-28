'use strict';

import './styles.scss';

import React from 'react';
import { RuleConfiguration } from 'react-rules';

class Rule extends React.Component {
  render () {
    return (
      <div className="container">
        <RuleConfiguration url="api/rule.json" />
      </div>
    );
  }
}

export default Rule;
