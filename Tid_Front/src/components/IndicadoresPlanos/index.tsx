import { CardIndicador, Container } from "./styles";
import { CirclesFour, ThumbsUp, CircleNotch, Coins, Smiley } from 'phosphor-react';
import data from '../../data/indicadoresPlanos.json';
import { useContext } from "react";
import { Context } from "../../Context";


export function IndicadoresPlanos() {

	const { planos, clientes } = useContext(Context);
	const totalPlanos = planos.length;

	function planoMaisAderido() {
	//crio um novo array:
	const planosAnalisados = new Array();
	//meu array contem objetos para cada tipo de plano e uma chave para acumular a contagem
	planos.forEach(plano => {
		// criado um objeto para cada plano
			planosAnalisados.push({
				filiacao: plano.filiacao,
				clientesNestePlano: 0,
			});
	});

	// cada plano
	planosAnalisados.forEach((plano) => {
		// é comparado em cada cliente
		clientes?.forEach(cliente => {
			if (plano.filiacao === cliente.filiacao) {
				// se o plano e cliente for true, a chave acumuladora é acrescentada
				plano.clientesNestePlano = plano.clientesNestePlano + 1;
			}
		});
	})
	// ordenacao para obter o mais aderido na primeira posicao
	planosAnalisados.sort((a, b) => a.clientesNestePlano > b.clientesNestePlano ? -1 : 1);
	// se houver array e se houver algo na primeira posicao, o valor será retornado
	return planosAnalisados?.[0]?.filiacao;
	}

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
				return planoMaisAderido();
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
		<Container		
			initial={{opacity: 0}} 
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
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
