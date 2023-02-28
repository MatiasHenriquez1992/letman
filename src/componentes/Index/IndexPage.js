
//Estilos
import './index.css';

//Imagenes
import imagenPortada from '../../imagenes/imagenportada.jpg';
import imagenCorolla from '../../imagenes/corolla-presentacion.png';
import Footer from '../Footer/Footer';

function IndexPage(){

  return(
    <div className='contenedor-principal-index'>
        <div className='nav-bar'>
          <h2 className='nombre-empresa'>Letman</h2>
          <p className='texto-alquileres'>Alquileres</p>
          <div className='contenedor-navbar'>
            <a className='link-vehiculos' href='/vehiculos/formulario'>Vehiculos</a>
            <a className='link-nosotros' href='#'>Nosotros</a>
            <a className='link-donde-estamos' href='#'>Donde estamos</a>
          </div>
        </div>
      <div className='contenedor-portada-principal'>
        <div className='contenedor-formulario'>
          <form className='formulario-vehiculo'>
            <div className='contenedor-retiro'>
            <label className='label-formulario'>Lugar de retiro</label>
              <select className='lista-ubicacion-formulario'  name="select">
                <option value="value1">Cipolletti, Rio Negro</option>
                <option value="value2" selected>Neuquén, Neuquen</option>
                <option value="value3">Bariloche, Rio Negro</option>
              </select>
            </div>
            <div className='fecha-retiro'>
              <label className='label-formulario'>Fecha de retiro</label>
              <input className='input-formulario'  type='Date'/>
            </div>
            <div className='contenedor-devolucion'>
              <label className='label-formulario'>Fecha de devolución</label>
              <input className='input-formulario'  type='Date'/>
            </div>
            <div className='contenedor-hora-devolucion'>
              <label className='label-formulario'>Hora</label>
              <input className='input-formulario'  type='time'/>
            </div>
            <div className='contenedor-boton'>
              <button className='boton-ver-disponibilidad'>Ver disponibilidad</button>
            </div>
          </form>
        </div>
          <img className='imagen-portada' src={imagenPortada}/>
      </div>


      <div className='cards-presentacion'>
        <div className='card'>
          <div className='contenedor-titulo'>
            <h2 className='titulo-card'>SOPORTE</h2>
            <span class="material-symbols-outlined">check_circle</span>
          </div>
          
          <p>Estamos para brindarte el mejor servicio. Te estaremos 
            asistiendo permanentemente.
          </p>
        </div>

        <div className='card'>
          <div className='contenedor-titulo'>
            <h2 className='titulo-card'>UBICACION</h2>
            <span class="material-symbols-outlined">location_on</span>
          </div>

          <p>Contamos con local para concretar tu alquiler y devolución
            del vehiculo solicitado.
          </p>
        </div>
        
        <div className='card'>
          <div className='contenedor-titulo'>
            <h2 className='titulo-card'>TODO A TU TIEMPO</h2>
            <span class="material-symbols-outlined">update</span>
          </div>
          
          <p>Elegí las fechas y horarios que más se adapten 
            a tus necesidades para retirar y devolver el vehículo.
          </p>
        </div>
      </div>

      <div className='contenedor-presentacion'>
        <img className='imagen-corolla' src={imagenCorolla}/>
        <div className='contenedor-textos-presentacion'>
          <p className='texto-presentacion'>Alquiler desde</p>
          <p className='texto-precios'>$15.000/dia</p>
        </div>
      </div>

      <div className='contenedor-vehiculos'>
        <div className='vehiculo'>
          <h1 className='titulo-nuestros-vehiculos'>Elegí tu vehiculo</h1>

        </div>
      </div>

      <Footer />

    </div>
    )
}

export default IndexPage;