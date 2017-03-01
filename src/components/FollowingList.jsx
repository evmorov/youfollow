import React from 'react';
import FollowingListItem from './FollowingListItem';
import { ListGroup } from 'react-bootstrap';

const FollowingList = ({followings, onFollowingSelect, activeIndex}) => {
  if (!followings) return null;

  const followingListItems = followings.map((following, index) => {
    return (
      <FollowingListItem
        onFollowingSelect={onFollowingSelect}
        key={following.id}
        following={following}
        index={index}
        activeIndex={activeIndex}/>
    );
  });

  return (
    <ListGroup className="following-list col-md-2">
      {followingListItems}
    </ListGroup>
  );
};

export default FollowingList;
