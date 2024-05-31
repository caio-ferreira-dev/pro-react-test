import { useState } from "react";
import { useRouter } from 'next/router';
import { useUser } from "../../context/UserContext";
import styles from "@/styles/components/ui/authForm.module.css";
import { useForm } from "react-hook-form";
import axiosInstance from "../../libs/axiosInstance";

interface FormProps {
    inputNames: string[],
    page: 'Login' | 'Registrar-se'
}

export default function AuthForm({inputNames, page }: FormProps) {
    // React form
    const { register, handleSubmit } = useForm()

    // UserInfos context
    const { dispatch } = useUser()

    // PageRouter
    const router = useRouter()

    // Errors state
    const [reqError, setReqError] = useState('')
    
    // Render function
    function renderInputs(inputsList: string[]) {
        return inputsList.map((fieldName, index) => {
            let inputType = 'text';
            if (index !== 1 ) {
                let fieldPlace = '';
                fieldName === 'Username' ? fieldPlace = 'Nome de usuário' : fieldPlace = fieldName;
                
                return <input {...register('username')} autoComplete="off" key={index} className={styles.formInput} type="text" placeholder={fieldPlace}/>
            }
            if (fieldName == 'password') {
                inputType = 'password'
            }
            return <input {...register(fieldName)} autoComplete="off" key={index} className={styles.formInput} type={inputType} placeholder={'Senha'}/>
        })
    }

    // Request handler function
    async function handleRequest(formData: any) {
        if(page === 'Login') {
            try {
                const { data } = await axiosInstance.post('/auth/login', formData)
                dispatch({type: 'saveUser', payload: {token: data.token, username: formData.username}})
                router.push('/')
            } catch(e: any) {
                setReqError(e.response.data)
            }
           
        }
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit(handleRequest)}>
            {renderInputs(inputNames)}
            <p className={styles.reqError} style={{display: `${reqError.length > 0 ? 'block' : 'none'}`}}>{reqError}</p>
            <button className={styles.formButton} type="submit">{page}</button>
        </form>
    )
}
  