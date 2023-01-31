import PropTypes from 'prop-types';
import { ListStats } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <div>
      <ListStats>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total()}</li>
        <li>Posiitive Feedback {positivePercentage()}%</li>
      </ListStats>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
