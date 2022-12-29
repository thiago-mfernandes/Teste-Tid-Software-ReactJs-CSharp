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
		<ContainerSection>
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
              <th>Filiação</th>
              <th>Preço</th>
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
									<td data-label="Filiação:">{plano.filiacao}</td>
									<td data-label="Preço:">{plano.preco}</td>
									<AcoesPlanos idPlano={plano.id} plano={plano} />
								</tr>
							))
						}				
          </tbody>
        </ContainerTabela>
		</ContainerSection>
	)
}