import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import { Friend } from './Friend/Friend';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.prototype = {
  friends: PropTypes.array.isRequired,
};
