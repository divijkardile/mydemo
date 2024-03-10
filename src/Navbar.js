import { Outlet, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<div>
			<nav className='navbar'>
				<h1>Milk Store</h1>
				<ul className='nav-links'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/products'>Products</Link>
					</li>
					<li>
						<Link to='/contact-us'>Contact Us</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}

export default Navbar;
