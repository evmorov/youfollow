import React from 'react';
import FollowingListItem from './FollowingListItem';

const FollowingList = (props) => {
  if (!props.followings) {
    return <div>Loading...</div>;
  }

  const followingListItems = props.followings.map((following) => {
    return (
      <FollowingListItem
        key={following.id}
        following={following} />
    );
  });

  return (
    <ul className="list-group">
      {followingListItems}
    </ul>
  );
};

export default FollowingList;
