import React from 'react';
import UserDetail from './UserDetail';

const FollowingDetail = ({following, octo}) => {
  if (!following) return <div>Loading...</div>;

  return (
    <div id="following-detail" className="col-md-10">
      <h1>{following.login}</h1>
      <img className="img-responsive" src={following.avatarUrl} alt={following.login} />
      <a href={following.htmlUrl}>GitHub link</a>
      <UserDetail octo={octo} following={following} />
    </div>
  );
};

export default FollowingDetail;
