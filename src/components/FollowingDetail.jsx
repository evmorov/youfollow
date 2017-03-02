import React, { Component } from 'react';
import UserDetail from './UserDetail';
import RepoList from './RepoList';

class FollowingDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      following: null,
      user: null,
      repos: null
    };

    this.setStateIfFollowingChanged(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setStateIfFollowingChanged(nextProps);
  }

  setStateIfFollowingChanged(props) {
    const following = props.following;
    if (!following) return null;

    const octo = props.octo;
    if (!this.state.following || (following.id !== this.state.following.id)) {
      this.setState({
        following: following,
        user: null,
        repos: null
      });
      this.getUser(following, octo);
      this.getRepos(following, octo);
    }
  }

  getUser(following, octo) {
    octo.users(following.login).fetch((err, user) => this.setState({ user }));
  }

  getRepos(following, octo) {
    octo.users(following.login).repos.fetch((err, repos) => this.setState({ repos }));
  }

  render() {
    return (
      <div id="following-detail" className="col-md-10">
        <UserDetail user={this.state.user} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }

}

export default FollowingDetail;
