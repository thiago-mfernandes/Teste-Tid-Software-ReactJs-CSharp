import { CardIndicador, Container } from "./styles";
import { UsersFour, Medal, Plus, MinusCircle, CircleNotch } from 'phosphor-react';
import data from '../../data/indicadores.json';
import { useContext } from "react";
import { Context } from "../../Context";
import { intervalToDuration } from "date-fns";


export function Indicadores() {

	const { clientes } = useContext(Context);

	const totalClientes = clientes.length;

	const totalFiliados = clientes.reduce((acumulador, cliente): any => {
		// plano entre 0 e 3
		if(cliente.planoId > 0 && cliente.planoId <= 3) {
			return acumulador + 1;
		}
		
		return acumulador;
	}, 0);
	
	const totalVisitasUltimosSeteDias = clientes.reduce((acumulador, cliente):any => {  
		const {days} = intervalToDuration({
			start: new Date(cliente.Ultima_visita),
			end: new Date()
		});
		// Novos visitantes são considerados quando cadastrados nos ultimos 7 dias..
		if (days <= 7){
			return acumulador + 1;
		}

		return acumulador;
	}, 0);
 
	const totalInativos = clientes.reduce((acumulador, cliente):any => {
		// Cliente com aula gratis e sem plano..
		if(cliente.planoId >= 0 && cliente.planoId > 4) {
			return acumulador + 1;
		}

		return acumulador;
	}, 0);
	

	function mostrarIndicadores(tituloIndicador: string) {
		switch(tituloIndicador){
			case 'Total de Clientes':
				return totalClientes;
			case 'Filiados':
				return totalFiliados;
			case 'Novos':
				return totalVisitasUltimosSeteDias;
			case 'Inativos':
				return totalInativos;
			default:
				return 0;
		}
	}	

	function handleIcon(iconName: string) {
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
						<span>{mostrarIndicadores(item.titulo)}</span>
					</div>
					<span>{handleIcon(item.icon)}</span>
				</CardIndicador>
			))}
		</Container>
	)
}
