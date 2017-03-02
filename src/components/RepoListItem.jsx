import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const RepoListItem = ({ repo }) => {
  return (
    <ListGroupItem>
      <h4>{repo.name}</h4>
      <div>{repo.description}</div>
      <div>
        <span>Forks: {repo.forksCount} | </span>
        <span>Stars: {repo.stargazersCount} | </span>
        <span>Watchers: {repo.watchersCount} | </span>
        <span>Updated at: {repo.updatedAt.toString()}</span>
      </div>
      <div><a href={repo.htmlUrl}>GitHub link</a></div>
    </ListGroupItem>
  );
};

export default RepoListItem;
