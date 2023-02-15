import { createContext, useContext, useEffect } from "react"
import { useState } from "react"

export const AuthContext = createContext({}) // aqui estarão os contextos/estdaos que serão modificados

export const AuthProvider = (props) => {

    const [user, setUser] = useState({
        name: "denisson"
      })
      // para não perder o estado inicial, isso é sempre valido em varias situaçõoes 
      useEffect(() => {
        const userStorage = localStorage.getItem("user")
        if(userStorage) {
            setUser(JSON.parse(userStorage))
        } else {
            setUser({
                name: ""
            })
        }
      }, [])
      

    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

//esse é um hook personalizado
export const useAuth = () => useContext(AuthContext) // isso é so para não precisar importar nos arquivoso useContex(authContext)