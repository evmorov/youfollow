import React from 'react';
import { ListGroup } from 'react-bootstrap';
import FollowingListItem from './FollowingListItem.jsx';

const FollowingList = ({ followings, onFollowingSelect, activeIndex }) => {
  if (!followings) return <div>Loading...</div>;

  const followingListItems = followings.map((following, index) => (
    <FollowingListItem
      onFollowingSelect={onFollowingSelect}
      key={following.id}
      following={following}
      index={index}
      activeIndex={activeIndex}
    />
  ));

  return (
    <ListGroup id="following-list" className="col-md-2">
      {followingListItems}
    </ListGroup>
  );
};

export default FollowingList;
