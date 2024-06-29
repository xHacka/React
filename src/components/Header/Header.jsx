import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies">Movies</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};