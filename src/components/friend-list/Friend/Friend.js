import PropTypes from 'prop-types';
import css from './Friend.module.css';

export const Friend = ({ friend }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={setBackgroundColor(friend.isOnline)}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

function setBackgroundColor(status) {
  if (status) {
    return { backgroundColor: 'green' };
  } else {
    return { backgroundColor: 'red' };
  }
}

Friend.prototype = {
  friend: PropTypes.array.isRequired,
};
