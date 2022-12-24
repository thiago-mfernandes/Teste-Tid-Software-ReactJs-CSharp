import { Container, BoxUsuario, BoxInfo, BoxGrafico, BotaoEditar, } from "./styles"

interface MenuUsuarioProps {
	menuIsVisible: boolean
}

export function MenuUsuario({menuIsVisible}: MenuUsuarioProps) {
	return (
		<Container>

			<BoxUsuario>
				<img src="https://avatars.githubusercontent.com/u/91342038?v=4" alt="" />
				<div>
					<h2>Thiago Fernandes</h2>
					<span>Admin</span>
				</div>
			</BoxUsuario>

			<BoxInfo>
				<h2>Alunos de Hoje:</h2>
				<span>18</span>
			</BoxInfo>

			<BoxInfo>
				<h2>Agendamento Semanal</h2>
				<span>85<span>%</span></span>
			</BoxInfo>

			<BoxGrafico>
				<div></div>
			</BoxGrafico>

			<BotaoEditar>
				Editar
			</BotaoEditar>
		</Container>
	)
}