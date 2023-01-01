import { PencilSimpleLine, TrashSimple } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../Context";
import { Plano } from "../../../../types/interfaces";
import { ContainerModal, ContainerTD, StyledModal } from "./styles";
import Modal from "react-modal"

Modal.setAppElement("#root");

interface BotoesAcaoProps {
	plano: Plano;
}

export function AcoesPlanos({plano}: BotoesAcaoProps) {
	const { mostrarModal, abrirModal, fecharModal, deletarPlano } = useContext(Context);
	let navigate = useNavigate();
	
  return (
		<ContainerTD data-label="Ações:">
			<div>
				<button>
					<PencilSimpleLine
						size={18}
						onClick={() => { navigate(`/editarPlano/${plano.id}`)}}
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
				contentLabel="Plano"
			>
				<ContainerModal
					initial={{ scale: 0.3, opacity: 0, x: "-100%"}} 
					animate={{ scale: 1, opacity: 1, x: "0%"}}
					transition={{duration: 0.75, ease: "easeInOut"}}
					exit={{ scale: 0, opacity: 0, x: "-100%" }}
				>
					<h2>Deseja excluir este Plano?</h2>
					<hr />
					<div>
						<button onClick={fecharModal}>Não</button>
						<button onClick={() => deletarPlano(plano.id)}>Sim</button>
					</div>
				</ContainerModal>
			</StyledModal>
		</ContainerTD>
	)
}