import { NavLink } from 'react-router-dom';
import MySvgIcon from './MySvgIcon';

export default function NavBar() {
    const menu = [
        { id: 0, name: 'Home', path: '/' },
        { id: 1, name: 'About', path: '/about' },
        { id: 2, name: 'Projects', path: '/projects' },
        { id: 3, name: 'Contact', path: '/contact' },
    ];

    return (
        <div className='Header'>

            <section>
                <h1>rIco</h1>
            </section>

            <section className='Section1'>
                <nav className='Nav'>
                    <ul>
                        {menu.map((item) => (
                            <li className='List' key={item.id}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => isActive ? 'active' : ''}
                                > {item.name} </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
            <section>
                <MySvgIcon name="github" className="github" /> 
                <MySvgIcon name="linkedin" className="linkedin" />
            </section>
        </div>
    );
}
