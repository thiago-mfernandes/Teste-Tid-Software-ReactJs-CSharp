import { PencilSimpleLine, Phone, TrashSimple } from "phosphor-react";
import { ContainerTD } from "./styles";

export function Acoes() {
  return (
		<ContainerTD data-label="Ações:">
			<Phone 
				size={20} 
				color={'#04D361'} 
			/>
			<PencilSimpleLine 
				size={20}
				color={'#4EA8DE'}
			/>
			<TrashSimple 
				size={20} 
				color={'#AB222E'}
			/>
		</ContainerTD>
	)
}