import { IndicadoresPlanos } from "../IndicadoresPlanos";
import { TabelaPlanos } from "../Tabela/TabelaPlanos";
import { Container } from "./styles";

export function Planos() {
	return (
		<Container>
			<IndicadoresPlanos />
			<TabelaPlanos />
		</Container>
	)
}