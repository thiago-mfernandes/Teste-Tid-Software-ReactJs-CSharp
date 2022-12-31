import { CardIndicador, Container } from "./styles";
import { UsersFour, Medal, Plus, MinusCircle, CircleNotch } from 'phosphor-react';
import data from '../../data/indicadoresPlanos.json';
import { useContext } from "react";
import { Context } from "../../Context";
import { intervalToDuration } from "date-fns";
import { Plano } from "../../types/interfaces";


export function IndicadoresPlanos() {

	const { planos, clientes } = useContext(Context);

	const totalPlanos = planos.length;

	//crio um novo array:
	var quantidadePlanos = new Array();
	//meu array contem objetos para cada tipo de plano e uma chave para acumular a contagem
	planos.forEach(plano => {
		var membership = {
			filiacao: plano.filiacao,
			clientesNestePlano: 0
		}
		// criado um objeto para cada plano
		quantidadePlanos.push(membership);
	});

	function planoMaisAderido() {
		// cada plano
		quantidadePlanos.forEach((plano) => {
			// é comparado em cada cliente
			clientes.forEach(cliente => {
				if(plano.filiacao === cliente.filiacao) {
					// se o plano e cliente for true, a chave acumuladora é acrescentada
					plano.clientesNestePlano = plano.clientesNestePlano + 1;
				}
			});
		})

		quantidadePlanos.sort(function(a,b) {
			if(a.clientesNestePlano > b.clientesNestePlano) {
				return -1;
			} else {
				return true;
			}
		})
		
		return quantidadePlanos[0];
	}

	var planoMaisAderidoOrdenado = planoMaisAderido()
	var x = planoMaisAderidoOrdenado.clientesNestePlano;
	console.log(x);

	//console.log(quantidadePlanos)
	//const planoMaisAderido = 

	// const planoMaisAderido = clientes.reduce((acumulador, cliente): any => {
	// 	// plano entre 0 e 3
	// 	if(cliente.) {
	// 		return acumulador + 1;
	// 	}
		
	// 	return acumulador;
	// }, 0);
	
	// const ticketMedio = planos.reduce((acumulador, cliente):any => {  
	// 	const { days } = intervalToDuration({
	// 		start: new Date(cliente.ultima_visita),
	// 		end: new Date()
	// 	});
	// 	// Novos visitantes são considerados quando cadastrados nos ultimos 7 dias..
	// 	if (days <= 7){
	// 		return acumulador + 1;
	// 	}

	// 	return acumulador;
	// }, 0);
 
	// const totalAulasGratis = planos.reduce((acumulador, cliente):any => {
	// 	// Cliente com aula gratis e sem plano..
	// 	if(cliente.planoId >= 0 && cliente.planoId > 4) {
	// 		return acumulador + 1;
	// 	}

	// 	return acumulador;
	// }, 0);
	

	function mostrarIndicadores(tituloIndicador: string) {
		switch(tituloIndicador){
			case 'Total de Planos':
				return totalPlanos;
			case 'Plano Mais Aderido':
				//return planoMaisAderido;
			case 'Ticket Médio':
				//return ticketMedio;
			case 'Aulas grátis este mês':
				//return totalAulasGratis;
			default:
				return 0;
		}
	}	

	function handleIcon(iconName: string) {
    switch (iconName) {
    case 'totalPlanos':
      return <UsersFour size={24} />;
    case 'maisAderido':
      return <Medal size={24} />;
    case 'ticket':
      return <Plus size={24} />;
		case 'aulasGratis':
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
