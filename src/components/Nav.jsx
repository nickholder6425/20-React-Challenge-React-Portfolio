import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <header>
        <img src="/images/Nix Pic.jpg" className="profile-picture" alt="Profile pic." />
        <div className="navbar">
            <h1 className="name">Nicholas Holder</h1>
            <nav>
                <ul className="navlist">
                    <li>
                        <Link to="/" className="animate">Home</Link>
                    </li>
                    <li>
                        <Link to="portfolio" className="animate">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="resume" className="animate">Resume</Link>
                    </li>
                    <li>
                        <Link to="contact" className="animate">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}