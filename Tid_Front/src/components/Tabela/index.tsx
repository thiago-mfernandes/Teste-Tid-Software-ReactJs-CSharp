import { UserPlus } from "phosphor-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import { Acoes } from "./Acoes";
import { ContainerSection, ContainerTabela } from "./styles";

export function Tabela() {

	const { clientes, planos } = useContext(Context);

	function mostrarDataFormatada(date: Date) {
		const dataRecebida = new Date(date);
		const dia = dataRecebida.getDate().toString().padStart(2, '0');
		const mes = (dataRecebida.getMonth() + 1).toString().padStart(2, '0');
		const ano = dataRecebida.getFullYear();

		return `${dia}/${mes}/${ano}`
	}

	function gerarNumeroDeVisitasAleatoriamente(min:number, max:number) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}

	// function mostrarNomePlano(ClientePlanoId:number) {
	// 	planos.filter((plano) => {
	// 		if (plano.id == ClientePlanoId) {
	// 			return plano.filiacao;			
	// 		} else {
	// 			return console.log("plano nao encontrado")
	// 		}
	// 	});
	// }

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
              <th>Sexo</th>
							<th>Plano</th>
              <th>Preço</th>
              <th>Visitas</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
						{
							clientes.map((cliente) => (
								<tr key={cliente.id}>
									<td data-label="Nome:">{cliente.nome}</td>
									<td data-label="Última Visita:">{mostrarDataFormatada(cliente.Ultima_visita)}</td>
									<td data-label="Sexo:">{cliente.genero}</td>
									<td data-label="Plano:">{cliente.planoId}</td>
									<td data-label="Preço:">R$150</td>
									{/**Em um projeto concluido, o modulo de agendamento alimentaria a quantidade de visitas realizadas pelo cliente. */}
									<td data-label="Visitas:">{gerarNumeroDeVisitasAleatoriamente(1, 50)}</td>
									<Acoes idCliente={cliente.id} cliente={cliente} />
								</tr>
							))
						}						
          </tbody>
        </ContainerTabela>
		</ContainerSection>
	)
}