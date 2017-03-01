import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const FollowingListItem = ({onFollowingSelect, following, index, activeIndex}) => {
  const className = index === activeIndex ? 'active' : '';

  return (
    <ListGroupItem
      header={following.login}
      className={className}
      onClick={() => onFollowingSelect(following, index)}
    >
      <img className="img-responsive" src={following.avatarUrl} alt={following.login} />
    </ListGroupItem>
  );
};

export default FollowingListItem;
