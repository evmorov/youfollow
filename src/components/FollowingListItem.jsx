import React from 'react';

const FollowingListItem = ({following, onFollowingSelect}) => {
  return (
    <li onClick={() => onFollowingSelect(following)} className="list-group-item">
      <div className="following-list">
        <div>{following.login}</div>
        <img className="img-responsive" src={following.avatarUrl} alt={following.login} />
      </div>
    </li>
  );
};

export default FollowingListItem;
