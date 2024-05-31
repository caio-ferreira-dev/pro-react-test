import { createPortal } from 'react-dom';
import styles from '@/styles/components/ui/modal/messageModal.module.css'

const ConfirmBuyModal: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return createPortal(
    <div className={styles.messageDiv}>
        <p>Compra realizada !</p>
    </div>,
    document.body
  );
};

export default ConfirmBuyModal;