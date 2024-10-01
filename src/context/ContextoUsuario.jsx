//Contexto nos sirve para compartir informacion entre componentes

import { createContext, useState } from "react";

//Creacion del CONTEXTO => ambiente para entender y compartir info
export const ContextoUsuario = createContext("");

export const Proveedor = ({children}) => {
    const [data,setData] = useState("");

    const objetoUsuario = {
        data,
        setData
    }

    return(
            <ContextoUsuario.Provider value={objetoUsuario} >
                {children}
            </ContextoUsuario.Provider>
    )

}
;