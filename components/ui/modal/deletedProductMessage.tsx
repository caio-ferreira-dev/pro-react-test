import { createPortal } from 'react-dom';
import styles from '@/styles/components/ui/modal/messageModal.module.css'

const DeletedProductMessage: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return createPortal(
    <div className={styles.messageDiv}>
        <p>Produto removido !</p>
    </div>,
    document.body
  );
};

export default DeletedProductMessage;