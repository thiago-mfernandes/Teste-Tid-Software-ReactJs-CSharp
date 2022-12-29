import { PencilSimpleLine, Phone, TrashSimple } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context";
import { Cliente } from "../../../types/interfaces";
import { ContainerTD } from "./styles";

interface BotoesAcaoProps {
	idCliente?: any;
	// any porque pode ser undefined
	cliente: Cliente;
}

export function Acoes({idCliente, cliente}: BotoesAcaoProps) {

	const { deletarCliente } = useContext(Context);

	let navigate = useNavigate();

  return (
		<ContainerTD data-label="Ações:">
			<div>
				<button>
					<a href=" https://wa.me/5519984009105" target="_blank">
						<Phone
							size={18}
							color={'#fff'}
						/>
					</a>
				</button>
				<button>
					<PencilSimpleLine
						size={18}
						onClick={() => { navigate(`/editarCliente/${cliente.id}`)}}
						// vai para a rota e exibe um componente de formulário
					/>
				</button>
				<button>
					<TrashSimple
						size={18}
						onClick={() => deletarCliente(idCliente)}
					/>
				</button>
			</div>
		</ContainerTD>
	)
}