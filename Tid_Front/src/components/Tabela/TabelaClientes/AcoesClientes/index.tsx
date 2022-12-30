import { PencilSimpleLine, Phone, TrashSimple } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../Context";
import { Cliente } from "../../../../types/interfaces";
import { ContainerModal, ContainerTD, StyledModal } from "./styles";
import Modal from "react-modal";

Modal.setAppElement("#root");

interface BotoesAcaoProps {
	idCliente?: any;
	// any porque pode ser undefined
	cliente: Cliente;
}

export function AcoesClientes({idCliente, cliente}: BotoesAcaoProps) {

	const { mostrarModal, abrirModal, fecharModal, deletarCliente } = useContext(Context);

	let navigate = useNavigate();

  return (
		<ContainerTD data-label="Ações:">
			<div>
				<button>
					<a href={`https://wa.me/${cliente.telefone}`} target="_blank">
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
						onClick={abrirModal}
					/>
				</button>
			</div>
			<StyledModal
				isOpen={mostrarModal}
				onRequestClose={fecharModal}
				contentLabel="Cliente"
			>
				<ContainerModal>
					<h2>Deseja excluir este Cliente?</h2>
					<hr />
					<div>
						<button onClick={fecharModal}>Não</button>
						<button onClick={() => deletarCliente(cliente.id)}>Sim</button>
					</div>
				</ContainerModal>
			</StyledModal>
		</ContainerTD>
	)
}