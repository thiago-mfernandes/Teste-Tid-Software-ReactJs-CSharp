import { UserPlus } from "phosphor-react";
import { Link } from "react-router-dom";
import { Acoes } from "./Acoes";
import { ContainerSection, ContainerTabela } from "./styles";

export function Tabela() {
  return (
		<ContainerSection>
			<h2>Clientes</h2>
			<Link to="/Clientes/Formulario">
				<button>
					<UserPlus size={20} />
					Adicionar
				</button>
			</Link>
			<input type="text"placeholder="Pesquisar por nome..."/>

			<ContainerTabela>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Última Visita</th>
              <th>Idade</th>
              <th>Sexo</th>
							<th>Plano</th>
              <th>Preço</th>
              <th>Visitas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
						<tr>
							<td data-label="Nome:">Thiago Fernandes</td>
							<td data-label="Última Visita:">25/12/2022</td>
							<td data-label="Idade:">35</td>
							<td data-label="Sexo:">Masculino</td>
							<td data-label="Plano:">Golden</td>
							<td data-label="Preço:">R$150</td>
							<td data-label="Visitas:">29</td>
							<Acoes />
						</tr>

						<tr>
							<td data-label="Nome:">Thiago Fernandes</td>
							<td data-label="Última Visita:">25/12/2022</td>
							<td data-label="Idade:">35</td>
							<td data-label="Sexo:">Masculino</td>
							<td data-label="Plano:">Golden</td>
							<td data-label="Preço:">R$150</td>
							<td data-label="Visitas:">29</td>
							<Acoes />
						</tr>

						
          </tbody>
        </ContainerTabela>
		</ContainerSection>
	)
}