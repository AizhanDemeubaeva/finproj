import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none font-mon">Store</Link>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
        <li><Link to="/contacts" className="nav-link px-2 link-secondary">Contacts</Link></li>
        <li><Link to="/users" className="nav-link px-2 link-secondary">Users</Link></li>
        <li><Link to="/checkout" className="nav-link px-2 link-secondary">Checkout</Link></li>
      </ul>

      <div className="col-md-3 text-end">
        <Link type="button" className="btn btn-success me-2" to="/login">Login</Link>
      </div>
    </header>
  );
}

export default Header;
