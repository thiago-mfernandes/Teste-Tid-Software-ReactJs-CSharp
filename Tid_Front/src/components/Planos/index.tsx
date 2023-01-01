import { IndicadoresPlanos } from "../IndicadoresPlanos";
import { TabelaPlanos } from "../Tabela/TabelaPlanos";
import { Container } from "./styles";

export function Planos() {
	return (
		<Container 
			initial={{ scale: 0.5, opacity: 0, y: "100%"}} 
			animate={{ scale: 1, opacity: 1, y: "0%"}}
			transition={{duration: 0.75, ease: "easeInOut"}}
			exit={{ scale: 0, opacity: 1 }}
		>
			<IndicadoresPlanos />
			<TabelaPlanos />
		</Container>
	)
}