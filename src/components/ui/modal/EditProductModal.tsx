import { createPortal } from 'react-dom';
import styles from '@/styles/components/ui/modal/newProductModal.module.css'
import { useForm } from 'react-hook-form';
import axiosInstance from '../../../libs/axiosInstance';
import { useEffect, useRef } from 'react';

const EditProductModal: React.FC<{ show: boolean, setShow: Function, product: Product }> = ({ show, setShow, product }) => {
  if (!show) return null;
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    }
  })
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
    await axiosInstance.patch(`/products/${product.id}`, {data: formData})
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
        <button className={styles.formButton}>Atualizar</button>
      </form>
    </div>,
    document.body
  );
};

export default EditProductModal;