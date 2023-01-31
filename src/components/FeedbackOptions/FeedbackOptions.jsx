import PropTypes from 'prop-types';
import { BoxOptions, Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <BoxOptions>
      {options.map(option => (
        <Button
          key={option}
          name={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </BoxOptions>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
