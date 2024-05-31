import { createPortal } from 'react-dom';
import styles from '@/styles/components/ui/modal/messageModal.module.css'

const AddedProductMessage: React.FC<{ show: boolean }> = ({ show }) => {
  if (!show) return null;

  return createPortal(
    <div className={styles.messageDiv}>
        <p>Produto adicionado !</p>
    </div>,
    document.body
  );
};

export default AddedProductMessage;