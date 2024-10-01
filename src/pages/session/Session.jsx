import { useState } from 'react';
import {Login} from './components/Login';
import {Signup} from './components/Signup';

export const Session = () => {
    const [cambiarForm, setForm] = useState("Signup");
    const [texto, setTexto] = useState("Nuevo por aquí?, crea una cuenta!")

    function setearForm(){
        if(cambiarForm === "Login"){
            setForm("Signup"); 
            setTexto("Nuevo por aquí?, crea una cuenta!")
        }else{
            setForm("Login");
            setTexto("Bienvenido de vuelta!, si ya tienes cuenta inicia session...")
        }
    }
    
    return(
        <>
            <div className='card row'>
                <section className='col-6'>
                    <p>{texto}</p>
                    <button onClick={setearForm}>{cambiarForm}</button>
                </section>
                <section className='col-6'>
                    {cambiarForm === "Login" ? <Signup /> : <Login />}
                </section>
            </div>
        </>
    )
}