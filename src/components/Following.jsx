import React, { Component } from 'react';
import UserDetail from './UserDetail.jsx';
import RepoList from './RepoList.jsx';

class Following extends Component {
  constructor(props) {
    super(props);

    this.state = {
      following: null,
      user: null,
      repos: null,
    };

    this.setStateIfFollowingChanged(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setStateIfFollowingChanged(nextProps);
  }

  setStateIfFollowingChanged(props) {
    const { following } = props;
    if (!following) return null;

    const { octo } = props;
    if (!this.state.following || (following.id !== this.state.following.id)) {
      this.setState({
        following,
        user: null,
        repos: null,
      });
      this.getUser(following, octo);
      this.getRepos(following, octo);
    }

    return true;
  }

  getUser(following, octo) {
    octo.users(following.login).fetch((err, user) => this.setState({ user }));
  }

  getRepos(following, octo) {
    const params = { sort: 'pushed' };
    octo.fromUrl(`/users/${following.login}/repos`).fetch(params, (err, repos) => {
      this.setState({ repos });
    });
  }

  render() {
    return (
      <div className="col-md-10">
        <UserDetail user={this.state.user} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

export default Following;
