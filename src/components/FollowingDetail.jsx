import React, { Component } from 'react';
import UserDetail from './UserDetail';

class FollowingDetail extends Component {

  render() {
    const following = this.props.following;
    if (!following) return <div>Loading...</div>;

    return (
      <div id="following-detail" className="col-md-10">
        <h1>{following.login}</h1>
        <img className="img-responsive" src={following.avatarUrl} alt={following.login} />
        <a href={following.htmlUrl}>GitHub link</a>
        <UserDetail octo={this.props.octo} following={following} />
      </div>
    );
  }
}

export default FollowingDetail;
