import React from 'react';
import '../App.css';

export function Info(props) {
  return (
      <section className="cantact_info">
        <section className="info_title">
          <span className="fa fa-user-circle"></span>
          <h2>INFORMACION<br />DE CONTACTO</h2>
        </section>
        <section className="info_items">
          <p><span className="fa fa-envelope"></span>{props.email}</p>
          <p><span className="fa fa-mobile"></span>{props.telefono}</p>
        </section>
      </section>
  );
}