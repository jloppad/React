import { useContext } from "react";
import Child from "./Child";
import { EjemploContext } from "./contexto/Contexto";

export default function Parent() {
    const ejemplo = useContext(EjemploContext);
    return (
        <>
            <h2 onClick={() => ejemplo.setSaludo("hola desde el padre")}>Parent {ejemplo.saludo}</h2>
            <h1>{ejemplo.saludo}</h1>
            <Child />
        </>
    )
}