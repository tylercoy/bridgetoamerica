import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";

export default function Navbar() {
    const { pathname } = useLocation()

    const contactUrl = pathname.includes('contact-us')
    

    return (
        <nav className="nav">
            <Link to="/" className="site-title">Bridge to America</Link>
            <ul>
                {
                    contactUrl && <CustomLink to="/">Home</CustomLink>
                }
                {
                    !contactUrl && <CustomLink to="/contact-us">Contact</CustomLink>
                }
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}
