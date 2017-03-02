import React from 'react';
import { ListGroup } from 'react-bootstrap';
import RepoListItem from './RepoListItem';

const RepoList = ({repos}) => {
  if (!repos) return <div>Loading...</div>;

  const repoListItems = repos.items.map((repo) => {
    return (
      <RepoListItem
        key={repo.id}
        repo={repo}
      />
    );
  });

  return (
    <div>
      <h3>Repositories</h3>
      <ListGroup id="repo-list">
        {repoListItems}
      </ListGroup>
    </div>
  );
};

export default RepoList;
