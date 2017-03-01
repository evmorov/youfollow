import React from 'react';
import Loading from 'react-loading';
import UserDetail from './UserDetail';

const FollowingDetail = ({following, octo}) => {
  if (!following) return <Loading type='spinningBubbles' color='#636363' />;

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
