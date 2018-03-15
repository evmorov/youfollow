import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Moment from 'moment';

const RepoListItem = ({ repo }) => (
  <ListGroupItem>
    <h4>
      <a href={repo.htmlUrl} target="_blank">
        <i className="fa fa-github"></i>
      </a>
      <span className="ml-5">{repo.name}</span>
    </h4>
    <div className="description">{repo.description}</div>
    <div className="small">
      <span>Forks: {repo.forksCount} | </span>
      <span>Stars: {repo.stargazersCount} | </span>
      <span>Watchers: {repo.watchersCount} | </span>
      <span>Updated: {Moment(repo.pushedAt).fromNow()}</span>
    </div>
  </ListGroupItem>
);

export default RepoListItem;
