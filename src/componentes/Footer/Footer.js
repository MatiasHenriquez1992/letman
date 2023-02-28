import './Footer.css';

//Iconos
import { FaFacebook, FaInstagram } from "react-icons/fa";



function Footer(){
  return(
    <div className="contenedor-principal-footer">

    <div className='contenedor-informacion'>
      <div className='contenedor-ubicacion'>
       <h3>Ubicación</h3>
       <p>Tierra del fuego 1325, Neuquén capital CP 8300</p>
       <p>Roca 431, Cipolletti, Rio Negro CP 8324</p>
       <p>Arrayanes 1023, Bariloche, Rio Negro CP 8200</p>
       <p>Estacionamiento propio</p>
       <h3>Horario de atención</h3>
       <p>9hs a 19hs </p>
      </div>

      <div className='contenedor-telefonos'>
        <h3>Comunicate</h3>
        <p>Tel: (0299) 443-2732. Neuquén Capital</p>
        <p>Tel: (0299) 478-4352. Cipolletti, Rio Negro</p>
        <p>Tel: (0294) 428-7268. Bariloche, Rio Negro</p>
        <p>Whatsapp. 0299 155 535 251</p>
        <p>consultas@letman.com.ar</p>
        <p>alquiler@letman.com.ar</p>
        <p>facturacion@letman.com.ar</p>
      </div>

      <div className='contenedor-redes-sociales'>
        <h3>Redes sociales</h3>
        <div className='iconos-redes-sociales'>
          <h2 className='red-social'><FaFacebook /></h2>
          <h2 className='red-social'><FaInstagram /></h2>
        </div>
       
      </div>


    </div>



    </div>  
  )
}

export default Footer;