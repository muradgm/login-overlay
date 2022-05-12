import HamburgerMenu from './HamburgerMenu.jsx'
import './Header.scss';

export default function Header() {
    return (
      <header className="Header">
        <div className="Logo">
          <img src="http://placekeanu.com/50/50" alt="Logo" />
        </div>
        <nav className="Nav">
          <div>Home page | About | Products | Stores | Bigfoot</div>
        </nav>
        <HamburgerMenu />
      </header>
    );
  }