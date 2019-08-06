import React from 'react';
import { useStore } from 'effector-react';
import cx from 'classnames';
import { Button } from '../components/button';
import { $profile, asyncFollow, asyncUnfollow } from './model';

const classNames = (x) =>
  cx('btn-sm action-btn', {
    'btn-secondary': x,
    'btn-outline-secondary': !x,
  });

export const FollowUser = () => {
  const { username, following } = useStore($profile);

  return (
    <Button
      className={classNames(following)}
      onClick={() =>
        following ? asyncUnfollow(username) : asyncFollow(username)
      }>
      <i className="ion-plus-round" />
      &nbsp;
      {following ? 'Unfollow' : 'Follow'} {username}
    </Button>
  );
};
