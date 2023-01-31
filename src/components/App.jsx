import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  };
  onLeaveFeedback = event => {
    const value = event.target.name;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification title="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
