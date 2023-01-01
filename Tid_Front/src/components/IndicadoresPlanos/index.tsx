import { CardIndicador, Container } from "./styles";
import { CirclesFour, ThumbsUp, CircleNotch, Coins, Smiley } from 'phosphor-react';
import data from '../../data/indicadoresPlanos.json';
import { useContext } from "react";
import { Context } from "../../Context";


export function IndicadoresPlanos() {

	const { planos, clientes } = useContext(Context);

	const totalPlanos = planos.length;

	
	//crio um novo array:
	let planosAnalisados = new Array();
	//meu array contem objetos para cada tipo de plano e uma chave para acumular a contagem
	planos.forEach(plano => {
		var membership = {
			filiacao: plano.filiacao,
			clientesNestePlano: 0,
		}
		// criado um objeto para cada plano
		planosAnalisados.push(membership);
	});

	// console.log(planosAnalisados);

	// funcao precisa ser debugada

	
	// function planoMaisAderido() {
	// 	// cada plano
	// 	planosAnalisados.forEach((plano) => {
	// 		// é comparado em cada cliente
	// 		clientes.forEach(cliente => {
	// 			if(plano.filiacao === cliente.filiacao) {
	// 				// se o plano e cliente for true, a chave acumuladora é acrescentada
	// 				plano.clientesNestePlano = plano.clientesNestePlano + 1;
	// 			}
	// 		});
	// 	})

	// 	console.log(planosAnalisados);

	// 	planosAnalisados.sort(function(a,b) {
	// 		if(a.clientesNestePlano > b.clientesNestePlano) {
	// 			return -1;
	// 		} else {
	// 			return true;
	// 		}
	// 	})
	// 	console.log(planosAnalisados);
	// 	const { filiacao } = planosAnalisados[0];

	// 	console.log(filiacao);
	// 	return filiacao;
	// }

	function ticketMedio() {
		let acumulador = 0;		
		clientes.forEach(cliente => {
			// console.log(cliente)
			if(cliente.preco) {
				acumulador = acumulador + cliente.preco;
			}
		});
		return (acumulador / clientes.length).toFixed(0);
	}

	function aulasGratis() {
		let acumulador = 0;
		clientes.forEach(cliente => {
			if(cliente.preco == 0) {
				acumulador += 1;
			}
		})
		return acumulador;
	}	

	function mostrarIndicadores(tituloIndicador: string) {
		switch(tituloIndicador){
			case 'Total de Planos':
				return totalPlanos;
			case 'Plano Mais Aderido':
				// return planoMaisAderido();
				return 'Light'
			case 'Ticket Médio':
				return `R$ ${ticketMedio()},00`;
			case 'Aulas grátis este mês':
				return aulasGratis();
			default:
				return 0;
		}
	}	

	function handleIcon(iconName: string) {
    switch (iconName) {
    case 'totalPlanos':
      return <CirclesFour size={24} />;
    case 'maisAderido':
      return <ThumbsUp size={24} />;
    case 'ticket':
      return <Coins size={24} />;
		case 'aulasGratis':
      return <Smiley size={24} />;
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
