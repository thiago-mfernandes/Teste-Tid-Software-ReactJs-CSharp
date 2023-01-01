import { UserPlus } from "phosphor-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context";
import { AcoesPlanos } from "./AcoesPlanos";
import { ContainerSection, ContainerTabela } from "./styles";

export function TabelaPlanos() {

	const { planos } = useContext(Context);
	const[busca, setBusca] = useState("");

  return (
		<ContainerSection
			initial={{opacity: 0}} 
			animate={{opacity: 1}}
			exit={{opacity: 0}}
		>
			<h2>Planos</h2>
			<Link to="/Planos/Formulario">
				<button>
					<UserPlus size={20} />
					Adicionar
				</button>
			</Link>
			<input 
				type="search" 
				id="search"
				placeholder="Pesquise por nome.."
				value={busca}
				onChange={(e) => setBusca(e.target.value)}
			/>

			<ContainerTabela variant={busca}>
				<thead>
					<tr>
						<th>Tipo de Plano</th>
						<th>Preço</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{
						planos.filter((plano) => {
							if(busca === "") {
								return plano;
							} else if ( plano.filiacao.includes(busca)) {
								return plano;
							}
						}).map((plano) => (
							<tr key={plano.id}>
								<td data-label="Tipo de Plano:">{plano.filiacao}</td>
								<td data-label="Preço:">R$ {plano.preco},00</td>
								<AcoesPlanos plano={plano} />
							</tr>
						))
					}				
				</tbody>
			</ContainerTabela>
		</ContainerSection>
	)
}
