import { useState, createContext } from "react";
export const EjemploContext = createContext({});

export default function EjemploContextProvider({ children }) {
    const [saludo, setSaludo] = useState("hola mundo");
    return (
        <EjemploContext.Provider value={{ saludo, setSaludo}}>
            {children}
        </EjemploContext.Provider>
    );
}