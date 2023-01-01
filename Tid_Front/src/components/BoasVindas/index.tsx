 import Work from '../../assets/workingOn.svg'
import { Container } from './styles'

export function BoasVindas() {
	return (
		<Container 
			initial={{x: "100%"}} 
			animate={{x: "0%"}}
			exit={{x: window.innerWidth, transition: { duration: 0.75, ease: "easeInOut"}}}
		>
			<img src={Work} alt="" />
			<h2>Desculpe o transtorno. Estamos em desenvolvimento!</h2>
		</Container>
	)
}