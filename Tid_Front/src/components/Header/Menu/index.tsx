import Logo from '../../../assets/logo.png'
import { Titulos, BoxLogo, Container } from './styles'
import { List } from 'phosphor-react'
import { Navbar } from '../Navbar'
import { useState } from 'react';
import { MenuUsuario } from '../MenuUsuario';

export function Menu() {	
	
	const [menuIsVisible, setMenuIsVisible] = useState(false);
	console.log(menuIsVisible);	
	
	setInterval(function() {
		if(document.body.clientWidth > 1023) {
			setMenuIsVisible(true);
		} 
	}, 100)

	function showMenu() {
		setMenuIsVisible(!menuIsVisible);
	}

	return (
		<Container isVisible={menuIsVisible}>
			<BoxLogo isVisible={menuIsVisible}>
				<Titulos isVisible={menuIsVisible}>
					<h1>tid<span>Studio</span></h1>
					<h2>Soft Yoga</h2>
				</Titulos>
				<img src={Logo} alt="" />
			</BoxLogo>
			<List size={30} onClick={showMenu}/>

			{menuIsVisible && 
				<>
					<Navbar menuIsVisible={menuIsVisible} onUserClick={setMenuIsVisible}/>
					<MenuUsuario menuIsVisible={menuIsVisible} />			
				</>
			}
		</Container>
	)
}
