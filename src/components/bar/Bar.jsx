import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Bar.scss";

const filters = {
  "7": null,
  "1": true,
  "0": false,
}

export const Bar = ({ searchHandler, filterHandler }) => {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    document.querySelector('body').className = `theme-${theme ? 'light' : 'dark'}`
  }, [theme])

  return (
    <div className="bar">
      <div className="search-wrapper">
        <input
          type="text"
          name="search"
          placeholder="Search note..."
          id="search"
          onChange={e => searchHandler(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className='search-icon' />
      </div>
      <select id="filter" onChange={e => filterHandler(filters[e.target.value])} >
        <option value="7">All</option>
        <option value="0">Complete</option>
        <option value="1">Incomplete</option>
      </select>
      <button className="btn" type="button" onClick={() => setTheme(!theme)}>
        <FontAwesomeIcon icon={theme ? faMoon : faSun} className='btn-theme' />
      </button>
    </div>
  );
};
