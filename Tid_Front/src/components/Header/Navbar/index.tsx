import { NavContainer } from "./styles";
import { Gauge, CalendarCheck, UserPlus, Bank, ChartLineUp, Gear, CircleNotch } from 'phosphor-react';
import data from '../../../data/navbar.json';

interface NavBarProps {
	menuIsVisible: boolean
}

export function Navbar({menuIsVisible}: NavBarProps) {

	function handleIcon(iconName:string) {
    switch (iconName) {
    case 'Dashboard':
      return <Gauge size={24} />;
    case 'Agendamentos':
      return <CalendarCheck size={24} />;
    case 'Clientes':
      return <UserPlus size={24} />;
			case 'Finanças':
      return <Bank size={24} />;
    case 'Relatórios':
      return <ChartLineUp size={24} />;
    case 'Configurações':
      return <Gear size={24} />;
    default:
      return <CircleNotch size={24} />;
    }
  }

	return (
		<NavContainer isVisible={menuIsVisible}>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						{handleIcon(item.nome)}
						<a href="#">{item.nome}</a>
					</li>
				))}
			</ul>
		</NavContainer>
	)
}