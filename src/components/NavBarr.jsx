import React from 'react';
const NavBarr = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <nav>
      <video src="/media/logo2.mp4" loop autoPlay muted></video>
      <div className="filters">
        <label>
          Semester:
          <select name="semester" onChange={handleFilterChange}>
            <option value="">sem</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
        </label>
        <label>
          Subject:
          <select name="subject" onChange={handleFilterChange}>
            <option value="">sub</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
        </label>
        <label>
          Section:
          <select name="section" onChange={handleFilterChange}>
            <option value="">sec</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        </label>
      </div>
    </nav>
  );
};

export default NavBarr;
