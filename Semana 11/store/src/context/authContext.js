import {useState, useEffect, createContext} from "react";

import { auth, firebase } from "../config/Firebase";

export const AuthContext = createContext();

// para poder ejecutar la funciones de ingresar, salir y ver el estado del login

const proveedorGoogle = new firebase.auth.GoogleAuthProvider();

export const AuthContextProvider = (props) => {
    
    const [user, setUser] = useState(null);

    // LOGUEO
    const signIn = async () => {
        // para logearte abre una ventana, signInWithPopUp
        const rptaGoogle = await auth.signInWithPopup(proveedorGoogle);
        // console.log(rptaGoogle)
    };

    const signOut = () => auth.signOut();

    useEffect(() => {

        // en caso el usuario salga o ingrese a la app, se va a disparar esta función para ver que hay
        // si no esta logueado o si sale retornará null
        // se se loguea retornará un objeto

        return auth.onAuthStateChanged((user) => {
            // console.log(user)
            // user es null o es un objeto (logueado)
            setUser(user);
        });
    }, []);

    return (
        <AuthContext.Provider
        // value es lo que va a brindar desde su estado global
        value={{user, signIn, signOut}}
        >
            {/* Provider va a funcionar como una caja generica transparente, componente genérico que va a contener otros componentes pero si saber exactamente que componentes son */}
            {props.children}
        </AuthContext.Provider>
    )

};
