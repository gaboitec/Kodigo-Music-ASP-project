import { useState } from 'react';
import {Login} from './components/Login';
import {Signup} from './components/Signup';
import '../../assets/CSS/session.css'

export const Session = () => {
    const [cambiarForm, setForm] = useState("Signup");
    const [texto, setTexto] = useState("Nuevo por aquí?, crea una cuenta!")

    function setearForm(){
        if(cambiarForm === "Login"){
            setForm("Signup"); 
            setTexto("Nuevo por aquí?, crea una cuenta!...")
        }else{
            setForm("Login");
            setTexto("Bienvenido de vuelta!, si ya tienes cuenta inicia session...")
        }
    }
    
    return(
        <>
            <div className='card sign'>
                <section className='session'>
                    {cambiarForm === "Login" ? <Signup /> : <Login />}
                </section>
                <section className='set'>
                    <p>{texto} <span className='setForm' onClick={setearForm}>{cambiarForm}</span></p>
                </section>
            </div>
        </>
    )
}