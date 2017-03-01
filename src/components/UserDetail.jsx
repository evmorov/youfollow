import React, { Component } from 'react';

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
  }

  getUser() {
    const octo = this.props.octo;
    octo.users(this.props.following.login).fetch((err, user) => this.setState({ user }));
  }

  render() {
    const user = this.state.user;
    if (!user || user.id !== this.props.following.id) {
      this.getUser();
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{user.name}</h2>
        <dl className="dl-horizontal">
          <dt>Location</dt>
          <dd>{this.orHyphen(user.location)}</dd>

          <dt>E-mail</dt>
          <dd><a href={`mailto:${user.email}`}>{this.orHyphen(user.email)}</a></dd>

          <dt>Biography</dt>
          <dd>{this.orHyphen(user.bio)}</dd>

          <dt>Web-site</dt>
          <dd><a href={user.blog}>{this.orHyphen(user.blog)}</a></dd>

          <dt>Company</dt>
          <dd>{this.orHyphen(user.company)}</dd>
        </dl>
      </div>
    );
  }

  orHyphen(value) {
    return value ? value : '-';
  }
}

export default UserDetail;
