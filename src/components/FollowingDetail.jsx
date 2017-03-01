import React from 'react';

const FollowingDetail = ({following}) => {
  if (!following) return null;

  return (
    <div className="following-detail col-md-10">
      <a href={following.htmlUrl}>GitHub link</a>
      <img className="img-responsive" src={following.avatarUrl} alt={following.login} />
    </div>
  );
};

export default FollowingDetail;
