import React from 'react';
import { Link } from 'react-router';

const Header = ({title}) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">{title}</Link>
    </nav>
  );
};

export default Header;
