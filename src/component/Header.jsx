import { NavLink } from "react-router-dom";

function Header({ facade, loggedIn }) {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/CA2FrontEnd/">
            Home
          </NavLink>
        </li>
        {facade.hasUserAccess("admin", loggedIn) && (
          <li>
            <NavLink activeClassName="active" to="/CA2FrontEnd/fetchcovid">
              FetchCovid
            </NavLink>
          </li>
        )}
        {facade.hasUserAccess("user", loggedIn) && (
          <li>
            <NavLink activeClassName="active" to="/CA2FrontEnd/fetchRecipes">
              FetchRecipies
            </NavLink>
          </li>
        )}
        {facade.hasUserAccess("admin", loggedIn) && (
          <li>
            <NavLink activeClassName="active" to="/CA2FrontEnd/covidstatus">
              Get covid status
            </NavLink>
          </li>
        )}
          {facade.hasUserAccess("user", loggedIn) && (
          <li>
            <NavLink activeClassName="active" to="/CA2FrontEnd/covidstatus">
              Get covid status
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
