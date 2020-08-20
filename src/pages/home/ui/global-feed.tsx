import React from 'react';
import { useGate, useList, useStore } from 'effector-react';
import { Link } from 'react-router-dom';
import { Pagination } from '../../../ui';
import {
  PageGate,
  $articles,
  $currentPage,
  $totalPages,
  currentPageSetted,
} from '../model/global-feed.model';
import '../model/init';

export const GlobalFeed: React.FC = () => {
  useGate(PageGate);
  const currentPage = useStore($currentPage);
  const total = useStore($totalPages);

  return (
    <div>
      <ul>
        {useList($articles, ({ author }) => (
          <li>
            <img alt={author.username} />
            <Link to={`/@${author.username}`}>{author.username}</Link>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        total={total}
        onChange={currentPageSetted}
        limit={10}
      />
    </div>
  );
};