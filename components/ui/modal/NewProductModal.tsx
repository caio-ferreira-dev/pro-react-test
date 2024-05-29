import { createPortal } from 'react-dom';
import styles from '@/styles/components/ui/modal/newProductModal.module.css'
import { useForm } from 'react-hook-form';
import axiosInstance from '../../../libs/axiosInstance';
import { useEffect, useRef } from 'react';

const NewProductModal: React.FC<{ show: boolean, setShow: Function }> = ({ show, setShow }) => {
  if (!show) return null;
  const { register, handleSubmit } = useForm()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if(formRef.current && !formRef.current.contains(e.target as Node)) {
          setShow(false)
      }
    }

    document.addEventListener("mousedown", handleClick)

    return () => {
        document.removeEventListener("mousedown", handleClick)
    }
  },[])

  async function handleFormSubmit(formData: any) {
    await axiosInstance.post('/products', {data: formData})
    setShow(false)
  }

  return createPortal(
    <div className={styles.darkContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit(handleFormSubmit)} ref={formRef}>
        <input className={styles.formInput} placeholder='Nome...' type="text" {...register('title')} />
        <input className={styles.formInput} placeholder='Preço...' type="number" {...register('price')} />
        <input className={styles.formInput} placeholder='Descrição...' type="text" {...register('description')} />
        <input className={styles.formInput} placeholder='Link da imagem...' type="text" {...register('image')} />
        <input className={styles.formInput} placeholder='Categoria...' type="text" {...register('category')} />
        <button className={styles.formButton}>Adicionar</button>
      </form>
    </div>,
    document.body
  );
};

export default NewProductModal;