import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListStats } from './Statistics.styled';
export default class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div>
        <ListStats>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.props.total()}</li>
          <li>Posiitive Feedback {this.props.positivePercentage()}%</li>
        </ListStats>
      </div>
    );
  }
}
Statistics.propTypes = {
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
