import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [initialColor, setInitialColor] = useState(true);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
      setInitialColor(false);
    } else {
      setScrolled(false);
      setInitialColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar sticky-top navbar-expand-lg ${initialColor ? 'initial-color' : ''} ${scrolled ? 'scrolled' : ''}`;

    return (
        <>
        <nav className={navbarClasses}>
  <div className="container-fluid">
    <Link className="navbar-brand text-light text-xxl" to="/">HeadlineHarbor</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link text-light" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/general">General</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link text-light" to="/technology">Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
}