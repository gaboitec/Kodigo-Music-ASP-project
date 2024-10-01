import {auth} from '../../../credentials/Firebase';
import {signInWithEmailAndPassword}  from "firebase/auth";
import { useContext} from 'react';
import {ContextoUsuario} from '../../../context/ContextoUsuario';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const esquema = yup.object().shape({
    email: yup.string().required("El correo es obligatorio").email("Correo no valido"),
    password: yup.string().required("La contraseña es obligatoria").min(8, "La constraseñaa debe ser de al menos 8 caracteres")
})

export const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(esquema)
    });

    const {setData} = useContext(ContextoUsuario);
    const navigate = useNavigate();

    const onSubmitForm = (data) => {

        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const usuario = userCredential.user;

            // ...  
            setData(usuario);
            navigate('/home');
        })
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <h1>Iniciar Sesion</h1>
                <section>
                    <label htmlFor="email">Email</label>
                    <p style={{color:"red"}}>{errors.email && errors.email.message}</p>
                    <input type="email" id="email" placeholder='ejemplo@correo.com' {...register('email')} />
                    </section>
                <section>
                    <label htmlFor="password">Contraseña</label>
                    <p style={{color:"red"}}>{errors.password && errors.password.message}</p>
                    <input type="password" id="password" placeholder='a1b2c3d4' {...register('password')} />
                </section>
                <section>
                        <button type="submit">Ingresar</button>
                </section>
            </form>
        </div>
        </>
    )
}