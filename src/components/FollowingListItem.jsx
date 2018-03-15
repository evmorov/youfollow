import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const FollowingListItem = ({
  onFollowingSelect,
  following,
  index,
  activeIndex,
}) => {
  const active = index === activeIndex ? 'active' : '';
  const className = `${active} clickable`;

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
