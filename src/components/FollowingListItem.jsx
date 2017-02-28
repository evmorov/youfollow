import React from 'react';

const FollowingListItem = ({following}) => {
  return (
    <li className="list-group-item">
      <div className="following-list">
        <a href={following.htmlUrl}>{following.login}
          <img className="img-responsive" src={following.avatarUrl} alt={following.login} />
        </a>
      </div>
    </li>
  );
};

export default FollowingListItem;
