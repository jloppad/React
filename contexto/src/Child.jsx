import { useContext } from "react";
import { EjemploContext } from "./contexto/Contexto";

export default function Child() {
    const example = useContext(EjemploContext);
    return (
        <h2 onClick={() => example.setSaludo("hola desde el hijo")}>
            Child {example.saludo}
        </h2>
    );
}