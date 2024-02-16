export function Moneda(props) {
    return (
        <>
            <button onClick={convertirPesetas}>{props.moneda}</button>
            <input type="number" id={props.moneda} readOnly value={props.moneda} />
            <button onClick={pesetasEuros}>Euros</button>
        </>
    )
}