import PropTypes from 'prop-types';
import { Text } from './Notification.styled';
export const Notification = ({ title }) => {
  return <Text>{title}</Text>;
};
Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
