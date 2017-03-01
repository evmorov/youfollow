import React from 'react';
import Loading from 'react-loading';
import { ListGroup } from 'react-bootstrap';
import FollowingListItem from './FollowingListItem';

const FollowingList = ({followings, onFollowingSelect, activeIndex}) => {
  if (!followings) return <Loading type='spinningBubbles' color='#636363' />;

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
    <ListGroup id="following-list" className="col-md-2">
      {followingListItems}
    </ListGroup>
  );
};

export default FollowingList;
