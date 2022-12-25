import { CardIndicador, Container } from "./styles";
import { UsersFour, Medal, Plus, MinusCircle, CircleNotch } from 'phosphor-react';
import data from '../../data/indicadores.json';

export function Indicadores() {

	function handleIcon(iconName:string) {
    switch (iconName) {
    case 'totalClientes':
      return <UsersFour size={24} />;
    case 'filiados':
      return <Medal size={24} />;
    case 'novos':
      return <Plus size={24} />;
		case 'inativos':
      return <MinusCircle size={24} />;
    default:
      return <CircleNotch size={24} />;
    }
  }

  return (
		<Container>
			{data.map((item) => (
				<CardIndicador key={item.id}>
					<div>
						<h2>{item.titulo}</h2>
						<span>total</span>
					</div>
					<span>{handleIcon(item.icon)}</span>
				</CardIndicador>
			))}
		</Container>
	)
}