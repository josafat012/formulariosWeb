import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import LogoLogin from '../../assets/imgs/bus.png'

function FormLogin() {
    const form = useRef();

    const handlerClick = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        let URI = 'http://34.225.239.102/api/iniciar';//default post
        let options = {
            method:'POST',
            headers:{ "Content-Type":"application/json", },
            body:JSON.stringify({
                usuario:formData.get('username'),
                contrasenia:formData.get('password'),
            })
        }
        fetch(URI,options)
        .then(response=> response.json())
        .then(data=>{alert(JSON.stringify(data))})
    }

    const handlerClickZ = (e) =>{
        // e.preventDefault();
        // location.href = '/register';
        // to ='/registro';
    }


    return ( 
        <>
            <form action="" ref={form}>
                <div className="div-formularios"><h1>LOGIN</h1></div>
                <div className='div-formularios'><img src={LogoLogin} alt="LogoLogin" width={200}/></div>
                <div className='div-formularios'><label htmlFor="username">Username:</label></div>
                <div className='div-formularios'><input type="text" id="username" name="username" placeholder="Usuario" required /></div>
                <div className='div-formularios'><label htmlFor="password">Password:</label></div>
                <div className='div-formularios'><input type="password" name="password" id="password" placeholder="Contraseña" required /></div>
                <div className='div-formularios-botons'><button onClick={handlerClick}>Iniciar sesion</button><Link to='/registro'><button>Alta de autobuses</button></Link><Link to='/register'><button>Registrate</button></Link></div>
                <div className='div-formularios'></div>
                <div className='div-formularios'></div>

            </form>
        </>
     );
}

export default FormLogin;