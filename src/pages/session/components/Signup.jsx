import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../credentials/Firebase';
import { useContext } from 'react';
import { ContextoUsuario } from '../../../context/ContextoUsuario';

const esquema = yup.object().shape({
    email: yup.string().required("El correo es obligatorio").email("Correo no valido"),
    password: yup.string().required("La contraseña es obligatoria").min(8, "La contraseña debe tener al menos 8 caracteres"),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null], "Las constraseñas deben coincidir")
})

export const Signup = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(esquema)
    });

    const {setData} = useContext(ContextoUsuario);

    const onSubmitForm = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredentials) => {
            const usuario = userCredentials.user;

            setData(usuario);
        })
        .catch((error) => {
            const mensajeError = error.message;
            console.error(mensajeError);
        });
    }
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <h1>Crear Cuenta</h1>
                <section className='row'>
                    <p style={{color:"red"}}>{errors.email && errors.email.message}</p>
                    <label className='col-4' htmlFor="email">Email</label>
                    <input className='form-control col-8 i' type="email" id="email" placeholder='ejemplo@correo.com' {...register('email')} />
                </section>
                <section className='row'>
                    <p style={{color:"red"}}>{errors.password && errors.password.message}</p>
                    <label className='col-4' htmlFor="password">Contraseña</label>
                    <input className='form-control col-8 i' type="password" id="password" placeholder='a1b2c3d4' {...register('password')} />
                </section>
                <section className='row'>
                    <p style={{color:"red"}}>{errors.confirmPassword && errors.confirmPassword.message}</p>
                    <label className='col-4' htmlFor="confirmPassword">Confirmar Contraseña</label>
                    <input className='form-control col-8 i' type="password" id="confirmPassword" {...register('confirmPassword')} />
                </section>
                <button className='btn btn-send' type='submit'>Crear cuenta</button>
            </form>
        </>
    )
}