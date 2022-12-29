import { Modal } from 'antd';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { useContext } from 'react';
import { Context } from '../../Context';

interface ModalProps {
  title: string;
  acao: string;
  id: number;
}


export default NiceModal.create(({title, acao, id}:ModalProps)  => {
  const modal = useModal();
  const { deletarCliente, deletarPlano } = useContext(Context)

  function excluirPlanoOuCliente(acao:string) {
    if(acao === "deletarPlano") {
      deletarPlano(id);
    } else if(acao === "deletarCliente") {
      deletarCliente(id);
    } else {
      modal.hide();
    }
  }
  return (
    <Modal
      title={title}
      cancelText="Não"
      okText="Sim"      
      onOk={() => excluirPlanoOuCliente(acao)}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
    >
    </Modal>
  );
});