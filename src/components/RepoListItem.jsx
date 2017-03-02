import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import Moment from 'moment';

const RepoListItem = ({ repo }) => {
  return (
    <ListGroupItem>
      <h4>{repo.name}</h4>
      <div>{repo.description}</div>
      <div>
        <span>Forks: {repo.forksCount} | </span>
        <span>Stars: {repo.stargazersCount} | </span>
        <span>Watchers: {repo.watchersCount} | </span>
        <span>Updated: {Moment(repo.updatedAt).fromNow()}</span>
      </div>
      <div><a href={repo.htmlUrl}>GitHub link</a></div>
    </ListGroupItem>
  );
};

export default RepoListItem;
