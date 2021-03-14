import { Link } from 'react-router-dom';

export const Menu = () => {

  return <ul>
    <li>
      <Link to="/">
        Cars
      </Link>
    </li>
    <li>
      <Link to="/trucs">
        Trucs
      </Link>
    </li>
    <li>
      <Link to="/planes">
        Planes
      </Link>
    </li>
    <li>
      <Link to="/bikes">
        Bikes
      </Link>
    </li>
  </ul>
}