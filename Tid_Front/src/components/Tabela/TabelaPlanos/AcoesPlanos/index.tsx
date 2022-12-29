import { PencilSimpleLine, Phone, TrashSimple } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../../Context";
import { Plano } from "../../../../types/interfaces";
import { ContainerTD } from "./styles";
import NiceModal from '@ebay/nice-modal-react';
import MyAntdModal from '../../../Modal';

interface BotoesAcaoProps {
	idPlano?: any;
	// any porque pode ser undefined
	plano: Plano;
}

export function AcoesPlanos({idPlano, plano}: BotoesAcaoProps) {

	const { deletarPlano } = useContext(Context);
	let navigate = useNavigate();

	function showAntdModal(id: number) {
    NiceModal.show(MyAntdModal, {
			title: "Deseja excluir este plano?",
			acao: "deletarPlano"
		})
  };

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
						// onClick={() => deletarPlano(idPlano)}
						onClick={() => showAntdModal(plano.id)}
					/>
				</button>
			</div>

			<div>

			</div>
		</ContainerTD>
	)
}