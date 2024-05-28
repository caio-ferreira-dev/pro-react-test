import styles from "@/styles/components/ui/buttons/quantityButton.module.css";

interface quantityButtonProps {
    functionality: 'increase' | 'decrease', 
}

export default function QuantityButton({ functionality }: quantityButtonProps) {

    return (
        <button>
            <img className={`${functionality === 'decrease' && styles.decreaseButton} ${styles.quantityButtonIcon}`} src="/arrow_button.png" alt={functionality === 'increase' ? `increase button` : `decrease button`} />
        </button>
    )
}