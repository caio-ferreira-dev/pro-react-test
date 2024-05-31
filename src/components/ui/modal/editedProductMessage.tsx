import { createPortal } from 'react-dom';
import styles from '@/styles/components/ui/modal/messageModal.module.css'

const EditedProductMessage: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return createPortal(
    <div className={styles.messageDiv}>
        <p>Produto atualizado !</p>
    </div>,
    document.body
  );
};

export default EditedProductMessage;