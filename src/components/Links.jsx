import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => (
  <div className="flex items-center justify-between mt-4 sm:justify-around">
    {links.map(({ url, text }) => (
      <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink>
    ))}
  </div>
);
