import { useRef, useState } from 'react';
import LogoLogin from '../../assets/imgs/bus.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function FormRegister() {
    const form = useRef();
    // const navigate = useNavigate();

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        let URI = 'http://34.225.239.102/api/registrar/usuario';//default post
        let options = {
            method:'POST',
            headers:{ "Content-Type":"application/json", },
            body:JSON.stringify({
                nombre:formData.get('nombre'),
                usuario:formData.get('usuario'),
                correo: formData.get('correo'),
                contrasenia:formData.get('contrasenia'),
            })
        }
        fetch(URI,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})

        // navigate('/');
    }


    return ( 
        <form ref={form}>
            <div className='div-formularios'><h1>REGISTER</h1></div>
            <div className='div-formularios'><img src={LogoLogin} alt="Logo" width={200} /></div>
            <div className='div-formularios'><input type="text" placeholder='Nombre' name='nombre' /></div>
            <div className='div-formularios'><input type="text" placeholder='Correo' name='correo' /></div>
            <div className='div-formularios'><input type="text" placeholder='Usuario' name='usuario' /></div>
            <div className='div-formularios'><input type="password" placeholder='Contraseña' name='contrasenia' /></div>
            <div className='div-formularios'><button onClick={handlerClick}>Registrarse</button></div>
            <div className='div-formularios'><Link to='/'>Volver</Link></div>
        </form>
     );
}

export default FormRegister;