import * as React from 'react';
import { Link } from 'react-router-dom';

export interface IHeaderProps {
}

export function Header (props: IHeaderProps) {
  return (
    <div>
      <Link to="fire">fire</Link>
      <Link to="water">water</Link>
      <Link to="earth">earth</Link>
      <Link to="air">air</Link>
    </div>
  );
}
