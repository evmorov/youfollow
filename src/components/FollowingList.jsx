import React from 'react';
import FollowingListItem from './FollowingListItem';

const FollowingList = (props) => {
  if (!props.followings) {
    return <div>Loading...</div>;
  }

  const followingListItems = props.followings.map((following) => {
    return (
      <FollowingListItem
        onFollowingSelect={props.onFollowingSelect}
        key={following.id}
        following={following} />
    );
  });

  return (
    <div className="col-md-2">
      <ul className="list-group">
        {followingListItems}
      </ul>
    </div>
  );
};

export default FollowingList;
