import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item spacer"></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile/xHacka">Profile</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};