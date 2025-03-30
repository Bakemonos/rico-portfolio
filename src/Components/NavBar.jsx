import { NavLink } from 'react-router-dom';
import styles from './Styles/navBar.module.css';


export default function NavBar() {
    const menu = [
        { id: 0, name: 'Home', path: '/' },
        { id: 1, name: 'About', path: '/about' },
        { id: 2, name: 'Projects', path: '/projects' },
        { id: 3, name: 'Contact', path: '/contact' },
    ];

    return (
        <div className={`${styles.Header}`}>

            <section>
                <h1>rIco</h1>
            </section>

            <section className={`${styles.Section1}`}>
                <nav className={`${styles.Nav}`}>
                    <ul>
                        {menu.map((item) => (
                            <li className={`${styles.List}`} key={item.id}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => isActive ? `${styles.active}` : ''}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            <button className={`${styles.Button}`}> Let's talk</button>
            </section>
        </div>
    );
}
