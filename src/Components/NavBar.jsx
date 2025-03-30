import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const menu = [
        { id: 0, name: 'Home', path: '/' },
        { id: 1, name: 'Services', path: '/services' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Skills', path: '/skills' },
        { id: 4, name: 'Portfolio', path: '/portfolio' },
        { id: 5, name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="Header">
            <section>
                <h1>rIco</h1>
            </section>
            <section>
                <nav className="Nav">
                    <ul>
                        {menu.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </div>
    );
}
