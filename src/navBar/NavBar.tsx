import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navBar">
      <nav>
      <select name="pets" id="pet-select">
        <option value="dog">My books</option>
        <option value="cat">Finished</option>
        <option value="hamster">Pending</option>
        <option value="hamster">Planned</option>
      </select>
      <select name="pets" id="pet-select">
        <option value="dog">Awards</option>
        <option value="cat">Achieved</option>
        <option value="hamster">To achieve</option>
      </select>
      <button>Add book</button>
      </nav>
    </div>
  );
}

export default NavBar;
