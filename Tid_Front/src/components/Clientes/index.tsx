import { IndicadoresClientes } from "../IndicadoresClientes";
import { TabelaClientes } from "../Tabela/TabelaClientes";
import { Container } from "./styles";

export function Clientes() {
	return (
		<Container>
			<IndicadoresClientes />
			<TabelaClientes />
		</Container>
	)
}