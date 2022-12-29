import { PencilSimpleLine, Phone, TrashSimple } from "phosphor-react";
import { useContext } from "react";
import { Context } from "../../../Context";
import { Cliente } from "../../../types/interfaces";
import { ContainerTD } from "./styles";

interface BotoesAcaoProps {
	idCliente?: number | null | undefined;
	cliente: Cliente;
}

export function Acoes({idCliente, cliente}: BotoesAcaoProps) {

	const { editarCliente, deletarCliente } = useContext(Context);
  return (
		<ContainerTD data-label="Ações:">
			<a href=" https://wa.me/5519984009105" target="_blank">
				<Phone
					size={20}
					color={'#04D361'}
				/>
			</a>
			<PencilSimpleLine 
				size={20}
				color={'#4EA8DE'}
				onClick={() => editarCliente(idCliente, cliente)}
			/>
			<TrashSimple 
				size={20} 
				color={'#AB222E'}
				onClick={() => deletarCliente(idCliente)}
			/>
		</ContainerTD>
	)
}