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
      return null;
    }

    return (
      <h2>{user.name}</h2>
    );
  }
}

export default UserDetail;
