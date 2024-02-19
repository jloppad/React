import React from 'react';
import '../App.css';

export function Valor(props) {
  return (
    <>
      <label htmlFor={props.id}>{props.campo}</label>
      <input type="text" id={props.id} value={props.valor} readOnly={props.readonly} onChange={props.onChange}/>
    </>
  );
}