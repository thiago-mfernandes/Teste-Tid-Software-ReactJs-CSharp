import { Indicadores } from "../Indicadores";
import { Tabela } from "../Tabela";
import { Container } from "./styles";

export function Clientes() {
	return (
		<Container>
			<Indicadores />
			<Tabela />
		</Container>
	)
}