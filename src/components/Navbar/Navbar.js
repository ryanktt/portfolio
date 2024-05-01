import React, { useState } from 'react';
import Hamburguer from './Items/Hamburguer';
import SideDrawer from './Items/SideDrawer';
import Toolbar from './Items/Toolbar';
import logo from '../../assets/logo.png';

const Navbar = () => {
	const [sdActive, setSdActive] = useState(false);

	const toggleSideDrawer = () => {
		setSdActive(!sdActive);
	};
	/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
	var prevScrollpos = window.pageYOffset;
	window.onscroll = function () {
		var currentScrollPos = window.pageYOffset;
		if (prevScrollpos > currentScrollPos) {
			document.querySelector('.nav-wrapper').style.top = '0';
		} else {
			document.querySelector('.nav-wrapper').style.top = '-70px';
			document.querySelector('.sidedrawer').classList.remove('active');
		}
		prevScrollpos = currentScrollPos;
	};
	return (
		<>
			<div className="nav-wrapper">
				<nav>
					<img className="logo" src={logo} alt="" />
					<Toolbar />
					<Hamburguer clicked={toggleSideDrawer} />
					<SideDrawer active={sdActive} />
				</nav>
			</div>
			{/*{ sdActive ? <Backdrop clicked={toggleSideDrawer}/> : null} */}
		</>
	);
};

export default Navbar;
