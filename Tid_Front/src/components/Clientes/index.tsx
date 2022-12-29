import { Indicadores } from "../Indicadores";
import { TabelaClientes } from "../Tabela/TabelaClientes";
import { Container } from "./styles";

export function Clientes() {
	return (
		<Container>
			<Indicadores />
			<TabelaClientes />
		</Container>
	)
}