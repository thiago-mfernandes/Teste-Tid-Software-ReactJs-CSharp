import { UserPlus } from "phosphor-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context";
import { AcoesClientes } from "./AcoesClientes";
import { ContainerSection, ContainerTabela } from "./styles";

export function TabelaClientes() {

	const { clientes } = useContext(Context);
	console.log("tabelaClientes =>")
	console.log(clientes);

	const[busca, setBusca] = useState("");

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

  return (
		<ContainerSection>
			<h2>Clientes</h2>
			<Link to="/Clientes/Formulario">
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
							clientes.filter((cliente) => {
								if(busca === "") {
									return cliente;
								} else if ( cliente.nome.includes(busca)) {
									return cliente;
								}
							}).map((cliente) => (
								<tr key={cliente.id}>
									<td data-label="Nome:">{cliente.nome}</td>
									<td data-label="Última Visita:">{mostrarDataFormatada(cliente.ultima_visita)}</td>
									<td data-label="Sexo:">{cliente.genero}</td>
									<td data-label="Plano:">{cliente.filiacao}</td>
									<td data-label="Preço:">{cliente.preco}</td>
									{/**Em um projeto concluido, o modulo de agendamento alimentaria a quantidade de visitas realizadas pelo cliente. */}
									<td data-label="Visitas:">{gerarNumeroDeVisitasAleatoriamente(1, 50)}</td>
									<AcoesClientes idCliente={cliente.id} cliente={cliente} />
								</tr>
							))
						}						
          </tbody>
        </ContainerTabela>
		</ContainerSection>
	)
}
