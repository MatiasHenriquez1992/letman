import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Vehiculos.css';

function Vehiculos(){
  const [vehiculos, setVehiculo]= useState({
    marca: null,
    modelo: null,
    ano: null,
    descripcion: null,
    color: null,
    imagenUrl: null,
    precioXdia: null
  })

  let marcaRef= React.createRef();
  let modeloRef= React.createRef();
  let anoRef= React.createRef();
  let descripcionRef= React.createRef();
  let colorRef= React.createRef();
  let imagenUrl= React.createRef();
  let precioXdia= React.createRef()

  const capturarCambios=()=>{
    setVehiculo({
      marca: marcaRef.current.value,
      modelo: modeloRef.current.value,
      ano: anoRef.current.value,
      descripcion: descripcionRef.current.value,
      color: colorRef.current.value,
      imagenUrl: imagenUrl.current.value,
      precioXdia: precioXdia.current.value
    })
    console.log(vehiculos)
  }

  const crearVehiculo=(e)=>{
    e.preventDefault();
    capturarCambios();
    axios.post('http://localhost:3001/vehiculos/nuevo', vehiculos)
     .then(res=>{
      console.log(res.data);
     })
  }

    return(
      <div className="contenedor-principal-carga-vehiculo">
          <h2 className='titulo-carga-vehiculo'>Carga un nuevo vehiculo</h2>
          <div className='contenedor-formulario-vehiculos'>
          <form className='formulario-carga-vehiculo' onSubmit={crearVehiculo}>
            <input type='text' name='marca' placeholder='Marca' ref={marcaRef} onChange={capturarCambios} />
            <input type='text' name='modelo' placeholder='Modelo Ejemplo (Hilux, Corsa)' ref={modeloRef} onChange={capturarCambios} />
            <input type='number' name='ano' placeholder='Año' ref={anoRef} onChange={capturarCambios} />
            <input type='text' name='descripcion' placeholder='Descripción' ref={descripcionRef} onChange={capturarCambios} />
            <input type='text' name='color' placeholder='Color de vehiculo' ref={colorRef} onChange={capturarCambios} />
            <input type='text' name='imagenUrl' placeholder='Link imagen de vehiculo' ref={imagenUrl} onChange={capturarCambios} />
            <input type='number' name='precioXdia' placeholder='Precio por dia' ref={precioXdia} onChange={capturarCambios} />
            <button className='boton-agregar-vehiculo'>Agregar vehiculo</button>
          </form>
          </div>
      </div>
    )
}

export default Vehiculos;