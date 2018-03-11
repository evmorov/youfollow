import React, { Component } from 'react';
import Moment from 'moment';

class UserDetail extends Component {
  render() {
    const orHyphen = value => value || '-';

    const user = this.props.user;
    if (!user) return <div>Loading...</div>;

    return (
      <div id="user-detail">
        <h2>{user.login}</h2>

        { user.name ? <p className="text-muted lead">{user.name}</p> : '' }
        <img className="img-responsive" src={user.avatarUrl} alt={user.login} />
        <a href={user.htmlUrl}>GitHub link</a>

        <dl className="dl-horizontal">
          <dt>Registred</dt>
          <dd>{Moment(user.createdAt).fromNow()}</dd>

          <dt>Location</dt>
          <dd>{orHyphen(user.location)}</dd>

          <dt>E-mail</dt>
          <dd><a href={`mailto:${user.email}`}>{orHyphen(user.email)}</a></dd>

          <dt>Biography</dt>
          <dd>{orHyphen(user.bio)}</dd>

          <dt>Web-site</dt>
          <dd><a href={user.blog}>{orHyphen(user.blog)}</a></dd>

          <dt>Company</dt>
          <dd>{orHyphen(user.company)}</dd>
        </dl>
      </div>
    );
  }
}

export default UserDetail;
